import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const GlassContainer = ({
  height = 260,
  width = 550,
  border = 2,
  rowStart = 0,
  rowEnd = 0,
  colStart = 0,
  colEnd = 0,
  isFlex = false,
  children,
}) => {
  return (
    <Wrapper
      $height={height}
      $width={width}
      $border={border}
      $rowStart={rowStart}
      $rowEnd={rowEnd}
      $colStart={colStart}
      $colEnd={colEnd}
      $isFlex={isFlex}
    >
      {/* <Backdrop /> */}
      {/* <NoiseOverlay /> */}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: ${({ $height }) => `${$height}px`};
  width: ${({ $width }) => `${$width}px`};
  border-radius: ${({ $border }) => `${$border}rem`};

  grid-area: ${(props) =>
    `${props.$rowStart} / ${props.$colStart} / ${props.$rowEnd}  / ${props.$colEnd}`};

  border: 1px solid var(--neutral-700);

  backdrop-filter: blur(40px);
`;

const Backdrop = styled.div`
  background: var(--color-gradient-glass);
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.2;
  border-radius: inherit;
  /* backdrop-filter: blur(40px); */
  pointer-events: none;
`;

const NoiseOverlay = styled.div`
  background: url('/noise-glass-overlay.svg');
  mix-blend-mode: overlay;
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
`;

GlassContainer.PropTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  border: PropTypes.number,
  children: PropTypes.node,
};

export default GlassContainer;
