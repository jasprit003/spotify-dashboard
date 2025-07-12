import React from 'react';
import styled from 'styled-components';

const Button = ({ className, href, onClick, children }) => {
  return (
    <StyledButton
      className={className}
      href={href}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  background: linear-gradient(var(--color-purple), var(--color-red));
  padding: 10px 24px;
  border-radius: 0.5rem;
  display: inline-block;
  transition: transform 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: linear-gradient(#61328b, #b33939);
    transform: scale(1.2);
  }

  &:active {
    background: linear-gradient(#61328b, #b33939);
    transform: scale(1);
  }
`;

export default Button;
