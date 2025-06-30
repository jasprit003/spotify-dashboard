import axios from 'axios';

const LOCALSTORAGE_KEYS = {
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  expireTime: 'spotify_token_expire_time',
  timestamp: 'spotify_token_timestamp',
};

// Get the production URL from environment or fall back to development URL
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '' // Empty string for same-origin requests in production
    : 'http://localhost:8888';

export const logout = () => {
  // Clear all localStorage items
  Object.values(LOCALSTORAGE_KEYS).forEach((key) => {
    window.localStorage.removeItem(key);
  });
  // Navigate to homepage
  window.location = window.location.origin;
};

const refreshToken = async () => {
  try {
    // Dynamically get the current refresh token and timestamp
    const refreshToken = window.localStorage.getItem(
      LOCALSTORAGE_KEYS.refreshToken
    );
    const timestamp = window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp);

    // Prevent refresh if no refresh token exists or if the last refresh happened too recently
    if (
      !refreshToken ||
      refreshToken === 'undefined' ||
      (Date.now() - Number(timestamp)) / 1000 < 1000
    ) {
      console.error('No refresh token available');
      logout();
      return;
    }

    // Use `/refresh_token` endpoint from our Node app
    const { data } = await axios.get(
      `/refresh_token?refresh_token=${refreshToken}`
    );

    // Update localStorage with the new access token and current timestamp
    window.localStorage.setItem(
      LOCALSTORAGE_KEYS.accessToken,
      data.access_token
    );
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

    // Reload the page so that updated tokens are reflected
    window.location.reload();
  } catch (e) {
    console.error(e);
  }
};

const hasTokenExpired = () => {
  const accessToken = window.localStorage.getItem(
    LOCALSTORAGE_KEYS.accessToken
  );
  const timestamp = window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp);
  const expireTime = window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime);
  if (!accessToken || !timestamp) {
    return false;
  }
  const millisecondsElapsed = Date.now() - Number(timestamp);
  return millisecondsElapsed / 1000 > Number(expireTime);
};

const getAccessToken = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  };
  const hasError = urlParams.get('error');

  // If there's an error OR the token in localStorage has expired, refresh the token
  if (
    hasError ||
    hasTokenExpired() ||
    window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken) === 'undefined'
  ) {
    refreshToken();
    return;
  }

  // If there is a valid access token in localStorage, return that token
  const storedAccessToken = window.localStorage.getItem(
    LOCALSTORAGE_KEYS.accessToken
  );
  if (storedAccessToken && storedAccessToken !== 'undefined') {
    return storedAccessToken;
  }

  // If there's an access token in the URL query params, store them in localStorage
  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    Object.keys(queryParams).forEach((key) => {
      window.localStorage.setItem(key, queryParams[key]);
    });
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
    return queryParams[LOCALSTORAGE_KEYS.accessToken];
  }

  // We should never reach this point!
  return false;
};

export const accessToken = getAccessToken();

// Only set the authorization header if we have a token
if (accessToken) {
  axios.defaults.baseURL = 'https://api.spotify.com/v1';
  axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
  axios.defaults.headers['Content-Type'] = 'application/json';
}

export const getUserData = () =>
  axios.get('/me').catch((error) => {
    console.log('Error details:', error.response?.data);
    throw error;
  });

export const getUserTop = () =>
  axios.get('/me/top/artists ').catch((error) => {
    console.log('Error details:', error.response?.data);
    throw error;
  });

export const getFollowedDetails = () =>
  axios.get('/me/following?type=artist').catch((error) => {
    console.log('error details: ', error.response);
    throw error;
  });

// export const getSavedTracks = () => {
//   axios.get('/me/playlists').catch((error) => {
//     console.log('error details: ', error.response);
//     throw error;
//   });
// };

export const money = () =>
  axios.get('/me/tracks').catch((error) => {
    console.log('error details: ', error.response);
    throw error;
  });

export const getTopItems = (item, limit = 6, value = 'short_term') =>
  axios
    .get(`/me/top/${item}?time_range=${value}&offset=0&limit=${limit}`)
    .catch((error) => {
      console.log('error details: ', error.response);
      throw error;
    });
