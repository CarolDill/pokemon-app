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
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.6);
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
    font: 2.5rem Karla, sans-serif;

    a {
      text-decoration: none;
      color: #000;
    }
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
    font: 7.2rem Karla, sans-serif;
  }

  h2 {
    padding-top: 12%;
    padding-bottom: 11%;
    font: 2.6rem Karla, sans-serif;
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
    font-family: 2.3rem Karla, sans-serif;
    color: #212121;
    font-weight: bold;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.6);
  }
  button {
    //66px;
    height: 6vh;
    //231px;
    width: 45%;
    border-radius: 0.5rem;
    border: 0.1rem;
    box-shadow: 0 4px #5eaf62;
    background: #73d677;

    font-family: 2.3rem Karla, sans-serif;
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
  padding: 0 10rem 0 10rem;

  justify-content: space-around;
  align-items: center;

  p {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
  }
`;
