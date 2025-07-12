import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { body_Regular } from '../styles/font-styles';

import { CaretDown } from '@phosphor-icons/react';

const TimeRange = ({
  onValueChange,
  value,
  onClick,
  isOpen = false,
  onClose,
}) => {
  const options = [
    { label: 'past month', value: 'short_term' },
    { label: 'past 6 months', value: 'medium_term' },
    { label: 'all time', value: 'long_term' },
  ];

  const userLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <Wrapper>
      <CustomSelectBox onClick={onClick}>
        <span>{userLabel}</span>
        <Icon>
          <CaretDown size={16} />
        </Icon>
      </CustomSelectBox>
      <AnimatePresence initial={false}>
        {isOpen && (
          <CustomOptionList
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            key="box"
          >
            {options.map((option) => (
              <Option
                key={option.value}
                onClick={() => {
                  onValueChange(option.value);
                  onClose(false);
                }}
              >
                {option.label}
              </Option>
            ))}
          </CustomOptionList>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 150px;
  max-width: 100%;
`;

const CustomSelectBox = styled.button`
  ${body_Regular}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.675em 1em;
  border: none;
  border-bottom: 1px solid var(--neutral-600);
  background-color: var(--background);
  cursor: pointer;
  color: var(--foreground);
`;

const Icon = styled(CaretDown)`
  transition: transform ease-in-out 0.3s;
`;

const CustomOptionList = styled(motion.ul)`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;
  backdrop-filter: blur(30px);
  /* border: 1px solid var(--neutral-400); */
  border-radius: 16px;
  list-style: none;
  padding: 10px;
  margin: 10px 0 0;
`;

const Option = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    /* background: linear-gradient(
      to right,
      hsl(230, 33%, 96%) 90%,
      transparent 90%,
      100%
    ); */

    /* border-bottom: 1px solid; */

    backdrop-filter: blur(66px);
  }
`;

export default TimeRange;
