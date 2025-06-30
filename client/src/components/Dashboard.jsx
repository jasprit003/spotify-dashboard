import React from 'react';
import styled from 'styled-components';

import GlassContainer from './GlassContainer';
import UserProfile from './UserProfile';
import TopHeading from './TopHeading';

import { TopArtists, TopSongs, TopGenres } from '../pages';

const Dashboard = () => {
  return (
    <Wrapper>
      <GlassContainer
        height={250}
        width={550}
        rowStart={1}
        colStart={1}
        rowEnd={2}
        colEnd={2}
      >
        <UserProfile />
      </GlassContainer>
      <GlassContainer
        height={532}
        width={750}
        rowStart={1}
        colStart={2}
        rowEnd={3}
        colEnd={3}
      >
        <TopHeading
          heading={'Top Artists'}
          path={'/artists'}
          // variant={'full'}
        />
        <TopArtists
          variant="half"
          limit={6}
        />
      </GlassContainer>
      <GlassContainer
        height={432}
        width={550}
        rowStart={2}
        colStart={1}
        rowEnd={4}
        colEnd={2}
      >
        <TopHeading
          heading={'Top Songs'}
          path={'/songs'}
        />
        <TopSongs variant={'half'} />
      </GlassContainer>

      <GlassContainer
        height={150}
        width={750}
        rowStart={3}
        colStart={2}
        rowEnd={4}
        colEnd={3}
      />
      <GlassContainer
        width={750 + 550 + 32}
        height={500}
        rowStart={4}
        colStart={1}
        rowEnd={5}
        colEnd={3}
        isFlex={true}
      >
        <TopHeading
          heading="Top Genres"
          state={false}
        />
        <TopGenres />
      </GlassContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;

  grid-template: 250px 250px 150px 500px / 550px 750px;

  gap: 32px;
  justify-content: center;
`;

export default Dashboard;
