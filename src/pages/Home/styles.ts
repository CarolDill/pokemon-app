import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 10vh 85vh 5vh;
  grid-template-areas:
    'h h'
    'c i'
    'f f';
`;

export const Header = styled.div`
  grid-area: h;
  background: #212121;
`;

export const Content = styled.div`
  padding-top: 128px;
  padding-left: 156px;
  grid-area: c;
  background: blue;
`;

export const CoverText = styled.div`
  width: 510px;
  h1 {
    font: 72px Karla, sans-serif;
  }

  h2 {
    font: 32px Karla, sans-serif;
  }
`;

export const Form = styled.form`
  width: 510px;
  input {
    height: 66px;
    width: 276px;
  }
  button {
    height: 66px;
    width: 231px;

    font-family: 23px Karla, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 27px;

    color: #212121;
  }
`;

export const Images = styled.div`
  background: gray;
  grid-area: i;
`;

export const Footer = styled.footer`
  grid-area: f;
  display: flex;
  padding: 0 100px 0 100px;

  justify-content: space-around;
  align-items: center;

  p {
    font-size: 18px;
  }
`;
