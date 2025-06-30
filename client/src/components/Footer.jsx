import React from 'react';
import styled from 'styled-components';

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

import { headingFirst_Bold, body_Regular } from '../styles/font-styles';

import GradientBalls from './GradientBalls';
import ExtendedFooter from './ExtendedFooter';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Let's Connect</Heading>
        <IconContainer>
          <GithubLogo size={48} />
          <LinkedinLogo size={48} />
        </IconContainer>
        <Summary>
          I’m passionate about designing and creating things—whether it's
          crafting experiences, building tools, or bringing ideas to life. I
          love experimenting, iterating, and making things that are both
          beautiful and functional.
        </Summary>
      </Container>
      <GradientBall
        size={800}
        bottom={0}
        left={-300}
        blur={40}
      />
      <ExtendedFooter />
      {/* <GradientBalls /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-top: 140px;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  ${headingFirst_Bold}
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 24px 0;
`;

const Summary = styled.p`
  ${body_Regular};
  text-align: inherit;
  max-width: 300px;
  margin-bottom: 160px;
`;

const GradientBall = styled(GradientBalls)`
  position: absolute;

  left: 35%;
  right: 0;
  top: 20%;
  z-index: -1;
  pointer-events: none;
`;

export default Footer;
