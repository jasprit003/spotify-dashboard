import React from 'react';
import styled, { css } from 'styled-components';

import { getTopItems } from '../spotify';

import { ArtistCard, JumpBack, Loading, TimeRange } from '../components';

const TopArtists = ({ variant, limit = 50 }) => {
  const [tracks, setTracks] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState('short_term');

  React.useEffect(() => {
    setIsLoading(true);
    fetchTopArtists();
    setIsLoading(false);
  }, [value]);

  async function fetchTopArtists() {
    const {
      total,
      data: { items },
    } = await getTopItems('artists', limit, value);
    setTracks((prev) => {
      return {
        ...prev,
        total,
        items,
      };
    });
  }

  return (
    <Wrapper $variant={variant}>
      {variant === 'half' ? null : (
        <Controls>
          <JumpBack />
          <TimeRange
            isOpen={isOpen}
            onValueChange={setValue}
            value={value}
            onClick={() => setIsOpen(!isOpen)}
            onClose={setIsOpen}
          />
        </Controls>
      )}
      {tracks && !isLoading ? (
        <Content $variant={variant}>
          {tracks.items.map((item, index) => (
            <ArtistCard
              variant={variant}
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </Content>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${({ $variant }) =>
    $variant === 'half'
      ? css`
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          margin: 16px 40px;
          justify-content: space-evenly;
        `
      : css`
          border: 1px solid var(--neutral-700);
          border-radius: 32px;
          margin: 40px 120px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--neutral-700);
`;

// const Content = styled.div`
//   ${({ $variant }) =>
//     $variant === 'half'
//       ? css`
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem 1rem;
//           margin: 16px 40px;
//           justify-content: space-evenly;
//         `
//       : css`
//           display: grid;
//           justify-items: center;
//           grid-template-columns: repeat(5, 1fr);
//           gap: 0 1rem;
//           height: 100vh;
//         `}

//   /* ${({ $isLoading }) =>
//     $isLoading === true
//       ? css`
//           display: block;
//           height: 100vh;
//         `
//       : null} */

//       ${({ $isLoading }) =>
//     $isLoading === true
//       ? css`
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//         `
//       : null}
// `;

const Content = styled.div`
  /* min-height: 60vh; */
  ${({ $isLoading, $variant }) => {
    if ($isLoading) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `;
    } else if ($variant === 'half') {
      return css`
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        margin: 16px 40px;
        justify-content: space-evenly;
      `;
    } else {
      return css`
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(5, 1fr);
        gap: 0 1rem;
        height: max-content;
      `;
    }
  }}
`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default TopArtists;
