import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vh 85vh 5vh;
  grid-template-areas:
    'h h'
    'c c'
    'f f';
`;

export const Header = styled.div`
  grid-area: h;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
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

export const Background = styled.div`
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
  grid-area: c;
`;

export const ContentText = styled.div`
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
  background: pink;
  height: 5vh;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0 20vh 0 20vh;

  span {
    margin: 0;
    width: 25vw;
    height: 18vh;
    border-radius: 8px;
    box-shadow: 4px 4px 4px 0px #212121 10%;
    background: #f2f2f2;
    display: flex;

    section {
      background: green;
      width: 40%;

      h1 {
        color: #212121;
        font-family: Karla;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
        text-align: center;
        padding-top: 1vh;
      }

      .circle {
        display: flex;
        width: 100%;
      }

      .circle div {
        margin-top: 2vh;
        height: 4vh;
        width: 2vw;
        border-radius: 50%;
        border: 3px solid #212121;
        align-items: center;
        justify-content: center;
      }

      .subtitle {
        display: flex;
      }

      .subtitle p {
        font-size: 12px;
        font-family: Roboto;
        padding: 0 01vh 0 01vh;
      }

      .info {
        display: flex;
        justify-content: space-around;

        .grass {
          color: #212121;
          width: 60px;
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
          width: 60px;
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

    img {
      /* position: relative;
      width: 60%;
      height: fit-content; */
      flex: 1;
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
