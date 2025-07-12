import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { accessToken } from './spotify';
import { UserProfileContext } from './context';

import { Navbar, AnimatedBackground } from './components';
import { Login, Profile, TopArtists, TopSongs } from './pages';

const App = () => {
  const [token, setToken] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    setToken(accessToken);

    // const fetchData = async () => {
    //   try {
    //     const response = await getFollowed();
    //     const data = response.data.artists;
    //     console.log('Response data:', data);
    //     setTopSongs(data);
    //   } catch (e) {
    //     console.error('Error details:', e.response?.data);
    //     console.error(e.message);
    //   }
    // };

    // fetchData();
  }, []);

  // function fetchArtistDetails(items) {
  //   let newId;
  //   items.map((item) => {
  //     newId = item.id;
  //     setArtistsId((prevState) => [...prevState, newId]);
  //   });
  //

  return (
    <UserProfileContext>
      <BrowserRouter>
        {token && (
          <Header>
            <Navbar />
          </Header>
        )}
        <Routes>
          <Route
            path="/"
            element={token ? <Profile token={token} /> : <Login />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/artists"
            element={<TopArtists />}
          />
          <Route
            path={'/songs'}
            element={<TopSongs />}
          />
        </Routes>
      </BrowserRouter>
    </UserProfileContext>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
`;

export default App;
