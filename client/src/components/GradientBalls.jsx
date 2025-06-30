import React from 'react';
import styled from 'styled-components';

const GradientBalls = ({
  className,
  size = 40,
  blur = 12,
  top = 0,
  left = 0,
  right = 0,
  // bottom = 0,
}) => {
  return (
    <Cricle
      className={className}
      $size={size}
      $top={top}
      $left={left}
      $right={right}
      // $bottom={bottom}
      $blur={blur}
    >
      {/* <Overlay $size={size} /> */}
    </Cricle>
  );
};

const Cricle = styled.div`
  background: var(--color-gradient-primary);
  position: fixed;
  z-index: -1;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
  right: ${({ $right }) => `${$right}px`};
  bottom: ${({ $bottom }) => `${$bottom}px`};
  transform: rotate(180deg);
  height: ${({ $size }) => `${$size}px`};
  width: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  filter: ${({ $blur }) => `blur(${$blur}px)`};
  /* pointer-events: none; */
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  background: var(--color-gradient-glass);
  opacity: 0.02;
`;

export default GradientBalls;
