import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

const JumpBack = () => {
  return (
    <StyledButton
      to={'/'}
      className="className"
    >
      <ArrowLeft size={32} />
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
  all: unset;

  /* position: fixed; */
  /* margin: 1.5rem 0 0 1rem; */
  border-radius: 50%;

  z-index: 24;
  padding: 1rem;
  background: var(--color-gradient-primary);
  backdrop-filter: blur(160px);
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:focus {
    outline: 2px solid white;
  }

  &:active {
    transform: scale(0.5);
  }
`;

export default JumpBack;
