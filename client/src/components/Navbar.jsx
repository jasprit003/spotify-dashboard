import React from 'react';
import styled from 'styled-components';

import { logout } from '../spotify';

import Button from './Button';

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
      <StyledGlassOverlay />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 20px 40px;
  border-bottom: 1px solid var(--neutral-600);
`;

const StyledGlassOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  height: 200%;

  backdrop-filter: blur(4px);
  mask-image: linear-gradient(to bottom, white 50%, transparent 50% 100%);
  pointer-events: none;
`;

const StyledLogoutButton = styled(Button)`
  z-index: 2;
`;

export default Navbar;
