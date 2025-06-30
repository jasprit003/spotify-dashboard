require('dotenv').config()

const express = require('express')
const querystring = require('querystring')
const axios = require('axios')
const path = require('path')

const app = express()
const port = 8888

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

// utility function
const generateRandomString = length => {
  let result = ''
  const string = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz0123456789`

  for (let i = 0; i < length; i++) {
    result = result + string.charAt(Math.floor(Math.random() * string.length))
  }
  return result
}

const stateKey = 'spotify_auth_state'

app.get('/login', (req, res) => {
  const url = 'https://accounts.spotify.com/authorize?'
  const state = generateRandomString(16)
  res.cookie(stateKey, state)

  const scope =
    'user-read-private user-read-email user-top-read user-follow-read user-library-read'

  const query = querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scope,
    state: state,
  })

  res.redirect(url + query)
})

app.get('/callback', (req, res) => {
  const code = req.query.code || null

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
    headers: {
      Content_type: 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString('base64')}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data

        const qureyParams = querystring.stringify({
          access_token,
          refresh_token,
          expires_in,
        })

        // redirecting to react app along with the tokens
        const redirectUri = process.env.FRONTEND_URI || 'http://localhost:5173'
        res.redirect(`${redirectUri}/?${qureyParams}`)
      } else {
        // res.send(response);
        res.redirect(
          `/?${querystring.stringify({
            error: 'invalid_token',
          })}`
        )
      }
    })
    .catch(error => {
      res.send(error)
    })
})

app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
    headers: {
      content_type: 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      res.send(error)
    })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'))
  })
}

app.listen(port, () => {
  console.log(`Express app up and running at https://localhost:${port}`)
})
