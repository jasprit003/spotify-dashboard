import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { easeIn, motion } from 'framer-motion';
import { getRandom } from '../utilis';

const GenreBalls = ({ children = 'genre', size = 150, isVisible = false }) => {
  const randomX = getRandom(size) * (Math.random() < 0.5 ? -1 : 1);
  const randomY = getRandom(size) * (Math.random() < 0.5 ? -1 : 1);

  return (
    <Wrapper
      draggable={true}
      $children={children}
      initial={false}
      $size={size}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 0.9 }}
      animate={
        isVisible
          ? {
              x: [0, randomX, -randomX, 0],
              y: [0, randomY, -randomY, 0],
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              },
            }
          : {
              opacity: 1,
              scale: 1,
              repeat: 0,
              x: 0,
              y: 0,
              transition: { duration: 0.2, ease: 'easeOut' },
            }
      }
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.p)`
  background: linear-gradient(
    119.21deg,
    rgba(255, 255, 255, 0.1) 22.69%,
    rgba(153, 153, 153, 0.1) 79.44%
  );
  width: ${({ $size }) => `${$size * 10}px`};
  height: ${({ $size }) => `${$size * 10}px`};
  ${({ $children, $size }) =>
    $children.length > 8 && $size <= 4
      ? css`
          font-size: 10px;
        `
      : null}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  backdrop-filter: blur(40px) brightnes(10%);
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default GenreBalls;
