import React from 'react';
import styled, { css } from 'styled-components';

import { body_Regular, display_regular } from '../styles/font-styles';

import { toMinutes } from '../utilis';

const SongList = ({ item, index, variant, style }) => {
  const duration = toMinutes(item.duration_ms);

  const songUrl = `https://open.spotify.com/track/${item.id}`;
  console.log(songUrl);

  return (
    <Wrapper
      $variant={variant}
      $style={style}
    >
      <SongInfo
        $variant={variant}
        $style={style}
      >
        <SongInfoContainer
          $variant={variant}
          $style={style}
        >
          <Index>{index + 1}.</Index>
          <Title
            $variant={variant}
            $style={style}
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {style === 'wide' && variant === 'full' && item.name.length >= 15
              ? `${item.name.slice(0, 13)}...`
              : item.name}
          </Title>
        </SongInfoContainer>
        <Artist>{item.artists[0].name}</Artist>
      </SongInfo>
      {variant === 'full' ? <SongDuration>{duration}</SongDuration> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ $variant }) =>
    $variant === 'full'
      ? css`
          padding: 40px 5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(
            to bottom,
            hsla(240, 10%, 85%, 0.25) 0%,
            hsla(240, 15%, 90%, 0.3) 5%,
            hsla(360, 0%, 0%, 0.1) 10%
              /* transparent 5% 100% hsla(240, 10%, 95%, 0.25) 1% */
          );
          backdrop-filter: blur(50px) brightness(200%);
          border-bottom: 2px solid grey;
        `
      : css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(50px);
          border-bottom: 1px solid var(--neutral-600);
          padding: 0.3rem 0;
        `}
`;
const SongInfoContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
const SongInfo = styled.div`
  display: flex;
  align-items: baseline;
`;
const Index = styled.div`
  margin-left: 1rem;
  ${({ $variant }) =>
    $variant === 'full'
      ? css``
      : css`
          padding-right: 0.25rem;
        `}
`;
const Title = styled.a`
  ${display_regular}

  ${({ $variant, $style }) =>
    $variant === 'full' && $style === 'compact'
      ? css`
          font-size: 28px;
        `
      : null}

  ${({ $variant }) =>
    $variant === 'half'
      ? css`
          ${body_Regular}
        `
      : null};

  &:hover {
    text-decoration: underline;
  }
`;
const Artist = styled.div`
  color: var(--neutral-300);

  ${({ $variant }) =>
    $variant === 'full'
      ? css``
      : css`
          font-size: 14px;
        `}

  &::before {
    content: 'by';
    padding-left: 8px;
    padding-right: 4px;
    font-size: 16px;
  }

  ${({ $variant }) =>
    $variant === 'half'
      ? css`
          ${body_Regular}
        `
      : null};
`;
const SongDuration = styled.div``;

export default SongList;
