import styled from 'styled-components';

export const Container = styled.div`
  background: #212121;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 10vh 85vh 5vh;
  grid-template-areas:
    'h h'
    'c c'
    'f f';
`;

export const Header = styled.div`
  grid-area: h;
  background: #f5db13;
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

export const Content = styled.div`
  grid-area: c;
  justify-self: center;
  width: 70vw;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  h1 {
    width: 100%;
    color: #ffffff;
    font-size: 72px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    border-bottom: 1px solid #ffffff;
  }
  .Image {
    display: flex;
    justify-content: space-between;
    margin-top: 3vh;
    margin-bottom: 3vh;
    height: 45vh;

    section {
      width: 25vw;
      margin: 0 5vw 0 0;

      h2 {
        font-family: Karla;
        font-weight: normal;
        font-size: 72px;
        color: #fdfdfd;
      }

      p {
        font-family: Source Sans Pro;
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 3vh;
      }
    }

    .staticsCards {
      display: flex;
      gap: 5vw;

      .statisticsPokemon {
        width: 12vw;
        height: 5vh;

        h3 {
          font-family: Karla;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          color: #fdfdfd;
        }

        h4 {
          font-family: Karla;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          color: #fdfdfd;
        }

        img {
          width: 10vw;
        }
      }
    }
  }
`;

export const OtherLegendaries = styled.div`
  height: 20vh;
  background: grey;
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
