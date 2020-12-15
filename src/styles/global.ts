import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body{
    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%) no-repeat;
    -webkit-font-smoothing: antialiased;
  }
`;
