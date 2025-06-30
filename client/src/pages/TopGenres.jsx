import React from 'react';
import styled from 'styled-components';

import { Prohibit } from '@phosphor-icons/react';

import { getTopItems } from '../spotify';
import { GenreBalls, Loading } from '../components';

const TopGenres = () => {
  const [genres, setGenres] = React.useState(null);
  const [topGenres, setTopGenres] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const userId = React.useRef();

  React.useEffect(() => {
    setIsLoading(true);
    fetchGenres();
    setIsLoading(false);
  }, []);

  async function fetchGenres() {
    const {
      data: { items: artists },
    } = await getTopItems('artists', 50, 'long_term');

    setGenres(
      artists
        .filter((artist) => artist.genres.length > 0)
        .map((artist) => artist.genres)
        .flat()
    );
  }

  React.useEffect(() => {
    if (!genres) return;

    const genreCounts = genres.reduce((acc, genre) => {
      if (!acc[genre]) {
        acc[genre] = {
          genre: genre,
          total: 0,
        };
      }
      acc[genre].total += 1;
      return acc;
    }, {});

    setTopGenres(Object.values(genreCounts).filter((genre) => genre.total > 2));

    console.log(topGenres);
  }, [genres]);

  React.useEffect(() => {
    if (!userId.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
          } else {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 1,
      }
    );

    observer.observe(userId.current);

    return () => observer.disconnect();
  }, []);

  const userData = [
    { genre: 'alternate r&b', total: 9 },
    { genre: 'punjabi pop', total: 7 },
    { genre: 'rap', total: 10 },
    { genre: 'hip hop', total: 12 },
    { genre: 'alternative hip hop', total: 6 },
    { genre: 'r&b', total: 15 },
    { genre: 'pop', total: 8 },
    { genre: 'trap', total: 4 },
  ];

  return (
    <Wrapper ref={userId}>
      <ButtonStop>
        <Prohibit
          size={28}
          onClick={() => setIsVisible(false)}
        />
      </ButtonStop>
      {userData && !isLoading ? (
        userData.map((genre, index) => (
          <GenreBalls
            key={index}
            size={genre.total}
            isVisible={isVisible}
          >
            {genre.genre}
          </GenreBalls>
        ))
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
`;

const ButtonStop = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: -8%;
  right: 2%;
`;

export default TopGenres;
