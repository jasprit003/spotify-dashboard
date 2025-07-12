import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CornersOut, Prohibit } from '@phosphor-icons/react';

const TopHeading = ({ heading, path, state = true }) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      {state ? (
        <Link to={path}>
          <CornersOut size={28} />
        </Link>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const Button = styled.button`
  all: unset;

  cursor: pointer;
`;
const Heading = styled.h3``;

export default TopHeading;
