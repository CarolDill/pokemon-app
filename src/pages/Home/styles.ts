import styled from 'styled-components';

export const CoverText = styled.div`
  height: 491px;
  width: 516px;
  left: 157px;
  top: 221px;

  h1 {
    font: 72px Karla, sans-serif;
  }

  h2 {
    font: 32px Karla, sans-serif;
  }
`;

export const Form = styled.form`
  width: 516px;
  left: 157px;
  top: 712px;

  display: flex;

  input {
    height: 66px;
    width: 276px;
  }
  button {
    height: 66px;
    width: 231px;
    position: relative;
    left: 0%;
    right: 55.23%;
    top: 88.15%;
    bottom: 0%;

    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 27px;

    color: #212121;
  }
`;

export const Footer = styled.footer`
  height: 21px;
  width: 463px;
  bottom: 1px;
  align-items: center;

  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
  }
`;
