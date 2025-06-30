import React from 'react';
import styled from 'styled-components';

// import Login from './Login';
import { Dashboard, GradientBalls, Footer } from '../components';

const Profile = ({ token, profile }) => {
  return (
    <Wrapper>
      <GradientBalls
        size={400}
        top={120}
        left={-200}
        blur={111}
      />
      {/* {!token && <Login />} */}
      {/* {profile && <Footer />}
       */}

      <Dashboard />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px 0;
`;

export default Profile;
