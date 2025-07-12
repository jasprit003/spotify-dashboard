import React from 'react';
import styled from 'styled-components';

import { Button } from '../components';
import AnimatedBackground from '../components/AnimatedBackground';

import { display_regular } from '../styles/font-styles';

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://spotify-dashboard-zl5y.onrender.com/login';
const Login = () => {
  return (
    <Wrapper>
      <AnimatedBackground />
      <Heading>
        <Text>
          Your Listening History, Artfully Crafted – Explore Your Spotify
          Soundtrack
        </Text>
      </Heading>
      <LoginSection>
        <Button href={LOGIN_URI}>Login with Spotify</Button>
        <Undertext>
          *No data stored. No passwords saved. Just your music insights.
        </Undertext>
      </LoginSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14rem;
`;

const Heading = styled.div``;

const Text = styled.p`
  ${display_regular};
  max-width: 750px;
`;

const Undertext = styled.p`
  font-style: italic;
  opacity: 0.5;
  font-size: 12px;
`;

const LoginSection = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-right: auto;
`;

export default Login;
