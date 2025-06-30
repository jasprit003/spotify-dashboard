import React from 'react';
import styled, { css } from 'styled-components';

import { getTopItems } from '../spotify';
import {
  SongList,
  JumpBack,
  Loading,
  TimeRange,
  CustomDropdown,
} from '../components';

const TopSongs = ({ variant = 'full', limit = 10 }) => {
  const [songs, setSongs] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('short_term');
  const [style, setStyle] = React.useState('wide');

  React.useEffect(() => {
    fetchSongs();
  }, [value]);

  async function fetchSongs() {
    setIsLoading(true);
    const {
      data: { items },
    } = await getTopItems('tracks', limit, value);
    console.log(items);
    setSongs((prev) => ({ ...prev, items }));
    setIsLoading(false);
  }
  return (
    <Wrapper $variant={variant}>
      {variant === 'full' && (
        <Controls>
          <JumpBack />
          <CustomDropdown
            style={style}
            onChange={setStyle}
          />
          <TimeRange
            isOpen={isOpen}
            onValueChange={setValue}
            value={value}
            onClick={() => setIsOpen(!isOpen)}
            onClose={setIsOpen}
          />
        </Controls>
      )}
      {songs && !isLoading ? (
        songs.items.map((item, index) => (
          <SongList
            variant={variant}
            style={style}
            key={item.id}
            item={item}
            index={index}
          ></SongList>
        ))
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ $variant }) =>
    $variant === 'full'
      ? css`
          width: 100%;
          height: 100vh;
        `
      : css`
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
        `}
`;

const Controls = styled.div`
  margin: 20px 20px 20px;
  padding-bottom: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--neutral-600);
`;

export default TopSongs;
