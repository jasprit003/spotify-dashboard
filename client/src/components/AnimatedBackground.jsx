import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const AnimatedBackground = ({ left = true, className }) => {
  return (
    <Wrapper
      className={className}
      $left={left}
    >
      <Gradient />
    </Wrapper>
  );
};

const gradient = keyframes`
from {
  transform: rotate(0deg);
} to {
  transform: rotate(360deg);
}
`;

const Wrapper = styled.div`
  position: fixed;
  transform: translateX(-50%);
  margin: 0 auto;
  width: 1000px;
  height: 1000px;
  z-index: -3;

  ${({ $left }) =>
    $left
      ? css`
          left: 0%;
        `
      : css`
          right: -10%;
        `};

  /* left: -50%; */
  /* pointer-events: none; */
  border-radius: 4rem 30rem 16rem 50rem;
  background: var(--color-gradient-primary);
  filter: blur(160px);
  animation: ${gradient} 7500ms ease-in-out infinite;
`;

const Gradient = styled.div``;

export default AnimatedBackground;
