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
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.6);
  display: flex;

  img {
    padding-left: 10%;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    list-style: none;
    padding-right: 10%;
  }

  li {
    align-self: center;
    padding: 0 5vh 0 5vh;
    font: 25px Karla, sans-serif;
  }
`;

export const Content = styled.div`
  //128px;
  padding-top: 12%;
  //156px;
  padding-left: 21%;
  grid-area: c;
`;

export const CoverText = styled.div`
  width: 71%;
  h1 {
    font: 72px Karla, sans-serif;
  }

  h2 {
    padding-top: 12%;
    padding-bottom: 11%;
    font: 26px Karla, sans-serif;
  }
`;

export const Form = styled.form`
  //510px;
  width: 71%;

  input {
    //66px;
    height: 6vh;
    //276px;
    width: 54%;
    font-family: 23px Karla, sans-serif;
    color: #212121;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.6);
  }
  button {
    //66px;
    height: 6vh;
    //231px;
    width: 45%;
    border-radius: 5px;
    border: 1px;
    box-shadow: 0 4px #5eaf62;
    background: #73d677;

    font-family: 23px Karla, sans-serif;
    font-style: normal;
    font-weight: bold;

    color: #212121;
  }
`;

export const Images = styled.div`
  grid-area: i;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  grid-area: f;
  display: flex;
  padding: 0 100px 0 100px;

  justify-content: space-around;
  align-items: center;

  p {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
`;
