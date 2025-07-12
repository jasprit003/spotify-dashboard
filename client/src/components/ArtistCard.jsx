import React from 'react';
import styled, { css } from 'styled-components';

import { body_Regular } from '../styles/font-styles';

import { formatNum } from '../utilis';

const ArtistCard = ({ item, index, variant }) => {
  const followers = formatNum(item.followers.total);

  return (
    <Wrapper
      key={item.id}
      $variant={variant}
    >
      <ImageContainer>
        <Image
          src={item.images[0].url}
          alt={`${item.name} image`}
        />
        <Title>{item.name}</Title>
      </ImageContainer>
      <Details>
        <Index>{index + 1}</Index>
        {variant === 'half' ? null : <Follower>{followers}</Follower>}
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ $variant }) =>
    $variant === 'half'
      ? css`
          margin-bottom: 1rem;
        `
      : css`
          margin-bottom: 2rem;
        `}
`;

const ImageContainer = styled.article`
  position: relative;
  border-radius: 24px;
  width: 170px;
  height: 170px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const Title = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  border-radius: 0 0 24px 24px;
  backdrop-filter: blur(8px);
  padding: 0.5rem 0;
  color: var(--color-gradient-primary);
`;

const Index = styled.p`
  ${body_Regular}
  margin: .2rem 0;
  font-size: 18px;
  &::before {
    content: '#';
    padding-right: 1px;
    opacity: 0.5;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Follower = styled.p`
  font-size: 14px;
  color: var(--neutral-300);
`;

export default ArtistCard;
