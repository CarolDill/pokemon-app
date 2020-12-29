import styled, { css } from 'styled-components';

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
  z-index: 1;

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

export const Dashboard = styled.div`
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
  grid-area: c;
  display: flex;
  flex-direction: column;
  overflow: auto;
  place-items: center;

  ::-webkit-scrollbar {
    width: 0rem;
  }
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

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  padding-top: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const PokemonContent = styled.div`
  display: flex;
`;

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f7f9;
  border-radius: 8px 0 0 8px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));

  h2 {
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  }
`;

export const Description = styled.div`
  display: flex;
  width: 120px;
`;

export const PokemonImg = styled.div`
  display: flex;
  width: 232px;
  height: 137px;
  background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
  border-radius: 0 8px 8px 0;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));

  img {
    width: 100%;
  }
`;

export const SkillDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  h3 {
    margin-top: 1vh;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    color: #4b4b4b;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: 1px solid #212121;
    border-radius: 50%;

    p {
      font-family: Karla;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      text-align: center;
      color: #212121;
    }
  }
`;

export const PokemonType = styled.div`
  display: flex;
  position: relative;
  top: -5vh;

  h2 {
    margin-left: 2vw;
    color: #212121;
    width: 6rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;

    box-shadow: inset 0 -0.2rem 0 rgba(0, 0, 0, 0.18);
    border-radius: 1.1rem;

    & + h2 {
      margin-left: 1vw;
    }
  }
`;

export const Color = styled.span`
  ${props =>
    props.property === 'fire' &&
    css`
      h2 {
        background: #e96a46;
      }
    `}

  ${props =>
    props.property === 'poison' &&
    css`
      h2 {
        background: #0b6d6d;
      }
    `}

    ${props =>
    props.property === 'normal' &&
    css`
      h2 {
        background: #f8ebb3;
      }
    `}

    ${props =>
    props.property === 'fighting' &&
    css`
      h2 {
        background: #7e5a70;
      }
    `}

    ${props =>
    props.property === 'flying' &&
    css`
      h2 {
        background: #51a5cc;
      }
    `}

    ${props =>
    props.property === 'ground' &&
    css`
      h2 {
        background: #9c7853;
      }
    `}

    ${props =>
    props.property === 'rock' &&
    css`
      h2 {
        background: #706e6d;
      }
    `}

    ${props =>
    props.property === 'bug' &&
    css`
      h2 {
        background: #058220;
      }
    `}

    ${props =>
    props.property === 'ghost' &&
    css`
      h2 {
        background: #d8eee7;
      }
    `}

    ${props =>
    props.property === 'steel' &&
    css`
      h2 {
        background: #9fafaa;
      }
    `}

    ${props =>
    props.property === 'water' &&
    css`
      h2 {
        background: #55c5fb;
      }
    `}

    ${props =>
    props.property === 'grass' &&
    css`
      h2 {
        background: #73d677;
      }
    `}

    ${props =>
    props.property === 'electric' &&
    css`
      h2 {
        background: #f8d326;
      }
    `}

    ${props =>
    props.property === 'psychic' &&
    css`
      h2 {
        background: #02899a;
      }
    `}

    ${props =>
    props.property === 'ice' &&
    css`
      h2 {
        background: #a6defc;
      }
    `}

    ${props =>
    props.property === 'dragon' &&
    css`
      h2 {
        background: #a8cb90;
      }
    `}

    ${props =>
    props.property === 'dark' &&
    css`
      h2 {
        background: #774a49;
      }
    `}

    ${props =>
    props.property === 'fairy' &&
    css`
      h2 {
        background: #f1cdd6;
      }
    `}

    ${props =>
    props.property === 'unknown' &&
    css`
      h2 {
        background: #fff;
      }
    `}

    ${props =>
    props.property === 'shadow' &&
    css`
      h2 {
        background: #e2e5e9;
      }
    `}
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
