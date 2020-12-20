import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vh 20vh 10vh 55vh 5vh;
  grid-template-areas:
    'h h'
    'i i'
    'fi fi'
    'c c'
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

export const ContentText = styled.div`
  grid-area: i;
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font: 35px Karla, sans-serif;
    padding: 5vh 0 3vh 0;
  }
  input {
    padding-left: 2vw;
    height: 7vh;
    width: 75vw;
    align-self: center;
    background: #f2f2f2;
    border-radius: 40px;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);

    font: 16px Source Sans Pro, sans-serif;
    color: #212121;
  }
`;

export const Filter = styled.div`
  grid-area: fi;
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
`;

export const Card = styled.div`
  grid-area: c;
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);

  span {
    width: 24vw;
    height: 15vh;
    border-radius: 8px;
    box-shadow: 4px 4px 4px 0px #212121 10%;
    background: #f2f2f2;
    display: flex;
  }

  section {
    p {
      color: #212121;
      font-family: Karla;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
      padding-left: 2vh;
    }

    .circle {
      display: flex;
    }

    .circle p {
      border: 3px;
    }

    .subtitle {
      display: flex;
    }

    .subtitle p {
      font-size: 20px;
    }

    .info {
      display: flex;

      button .grass {
        color: #212121;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        text-align: center;

        background: #07d6f2;
        box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
        border-radius: 11px;
      }

      .poison {
        color: #212121;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        text-align: center;

        background: #73d677;
        box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
        border-radius: 11px;
      }
    }
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
