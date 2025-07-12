import React from 'react';
import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

import { List, Rows } from '@phosphor-icons/react';

const CustomDropdown = ({ onChange, style = 'wide' }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const options = [
    { label: 'wide', icon: <Rows size={32} /> },
    { label: 'compact', icon: <List size={32} /> },
  ];

  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {options.find((opt) => opt.label === style)?.icon}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <CustomOptionBox
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
          >
            {options.map((option) => (
              <CustomOptionList
                key={option.label}
                onClick={() => {
                  onChange(option.label);
                  setIsOpen(false);
                }}
              >
                {option.icon}
              </CustomOptionList>
            ))}
          </CustomOptionBox>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  right: 30px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  height: 50px;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid var(--neutral-600);
  border-radius: 14px;
  padding: 0 10px;
  cursor: pointer;
`;

const CustomOptionBox = styled(motion.ul)`
  position: absolute;
  top: 120%;
  z-index: 5;
  width: 100px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  border: 1px solid var(--neutral-600);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  list-style: none;
`;

const CustomOptionList = styled.li`
  cursor: pointer;
  &:hover {
    outline: 1px solid var(--neutral-600);
  }
`;

export default CustomDropdown;
