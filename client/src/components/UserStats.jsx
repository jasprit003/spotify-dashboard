import React from 'react';
import styled from 'styled-components';

const UserStats = ({ profile }) => {
  const stats = [
    {
      label: 'following',
      value: profile.following,
    },
    {
      label: 'tracks',
      value: profile.savedTracks,
    },
    {
      label: 'playlists',
      value: profile.playlists || 0,
    },
  ];
  return (
    <Wrapper>
      {stats
        ? stats.map((stat, index) => (
            <Container key={index}>
              <Label key={index}>{stat.label}</Label>
              <Value>{stat.value}</Value>
            </Container>
          ))
        : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 16px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.p`
  margin-bottom: 0.2rem;
`;
const Value = styled.p``;

export default UserStats;
