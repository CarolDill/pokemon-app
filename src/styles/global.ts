import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body{
    background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
}
`;
