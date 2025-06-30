import React from 'react';
import styled from 'styled-components';

import { Heart } from '@phosphor-icons/react';

const ExtendedFooter = () => {
  return (
    <Wrapper>
      Made with <Icon size={24} /> by Jasprit Singh
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  backdrop-filter: blur(80px);
  border-top: 1px solid var(--neutral-600);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Heart)`
  display: inline-block;
  padding: 0 4px;
`;

export default ExtendedFooter;
