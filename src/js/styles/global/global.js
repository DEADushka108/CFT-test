import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {TextColor, BgColor} from '../variables/variables';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-family: "Questrial";
    src: url("./fonts/Questrial-Regular.woff2") format("woff2"), url("./fonts/Questrial-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    padding: 0;
    margin: 0;
    min-width: 360px;
    font-family: "Questrial", "Arial", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    font-stretch: normal;
    letter-spacing: normal;
    color: ${TextColor.LIGHT_BLUE};
    background-color: ${BgColor.WHITE};
  }
  `;
