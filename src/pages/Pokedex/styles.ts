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
  box-shadow: 0 0.4rem 1.6rem rgba(1, 28, 64, 0.2);
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
    font: 3.5rem Karla, sans-serif;
    padding: 5vh 0 3vh 0;
  }
  input {
    padding-left: 2vw;
    height: 7vh;
    width: 75vw;
    align-self: center;
    background: #f2f2f2;
    border-radius: 4rem;
    box-shadow: 0.4rem 0.4rem 1.6rem rgba(1, 28, 64, 0.2);

    font: 1.6rem Source Sans Pro, sans-serif;
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
    border-radius: 0.8rem;
    box-shadow: 0.4rem 0.4rem 0.4rem 0 #212121 10%;
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
        font-size: 1.8rem;
        text-shadow: 0.4rem 0.4rem 0.4rem rgba(33, 33, 33, 0.1);
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
        border: 0.3rem solid #212121;
        align-items: center;
        justify-content: center;
      }

      .subtitle {
        display: flex;
      }

      .subtitle p {
        font-size: 1.2rem;
        font-family: Roboto;
        padding: 0 01vh 0 01vh;
      }

      .info {
        display: flex;
        justify-content: space-around;

        .grass {
          color: #212121;
          width: 6rem;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.2rem;
          text-align: center;

          background: #07d6f2;
          box-shadow: inset 0 -0.2rem 0 rgba(0, 0, 0, 0.18);
          border-radius: 1.1rem;
        }

        .poison {
          color: #212121;
          width: 6rem;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.2rem;
          text-align: center;

          background: #73d677;
          box-shadow: inset 0 -0.2rem 0 rgba(0, 0, 0, 0.18);
          border-radius: 1.1rem;
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
