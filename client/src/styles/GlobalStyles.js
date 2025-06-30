import { createGlobalStyle } from 'styled-components';

import cssreset from './cssreset';
import fonts from './fonts';
import variables from './variables';

import { GradientBalls } from '../components';

const GlobalStyles = createGlobalStyle`
  ${cssreset};
  ${variables};
  ${fonts}

  body {
    padding-top: 80px;
    font-family: "Aeonik";
    font-weight: 700;
    background-color: var(--background);
    color: var(--foreground);
    height: 150vh;
  
  }

`;

export default GlobalStyles;
