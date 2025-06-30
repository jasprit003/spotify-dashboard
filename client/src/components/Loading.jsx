import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <LoadingBox />
      <LoadingBox />
      <LoadingBox />
      <LoadingBox />
      <LoadingBox />
    </Wrapper>
  );
};

const fadeInOut = keyframes`
from {
  opacity: 0;
} to {
  opacity: 1;
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const LoadingBox = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 10%;
  transform: rotate(180deg);
  background: var(--color-gradient-primary);

  animation: ${fadeInOut} 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    animation-delay: 0.9s;
  }

  &:nth-child(5) {
    animation-delay: 1.2s;
  }
`;

export default Loading;
