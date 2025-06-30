import { css } from 'styled-components';
import { display_regular, headingFirst_Bold } from './font-styles';

const variables = css`
  :root {
    --color-purple: #7a28c4;
    --color-red: #c44b4b;

    --background: #111424;
    --foreground: #ffffff;

    --neutral-100: hsl(0, 0%, 94.9%);
    --neutral-200: hsl(220, 3.8%, 84.5%);
    --neutral-300: hsl(225, 5.9%, 73.3%);
    --neutral-400: hsl(231, 7.4%, 65.7%);
    --neutral-500: hsl(230, 9.9%, 52.5%);
    --neutral-600: hsl(233, 4.1%, 38.4%);
    --neutral-700: hsl(227, 11.7%, 23.5%);
    --neutral-800: hsl(231, 35.8%, 10.4%);

    --color-gradient-backgroud-gradient: linear-gradient(
      to bottom,
      hsl(265, 55.9%, 11.6%) 0%,
      hsl(182, 72.3%, 38.2%) 50.71%,
      hsl(155, 81.8%, 19.4%) 100%
    );
    --color-gradient-glass: linear-gradient(
      to bottom,
      hsl(0, 0%, 100%) 0%,
      hsl(0, 0%, 60%) 99.94%
    );
    --color-gradient-primary: linear-gradient(
      to bottom,
      hsl(272, 66.1%, 46.3%) 0%,
      hsl(0, 50.6%, 53.1%) 100%
    );

    --text-display-bold: ${display_regular};
  }
`;

export default variables;
