import React from 'react';

import {
  Container,
  Header,
  Content,
  CoverText,
  Form,
  Images,
  Footer,
} from './styles';
import Pikachu from '../../assets/pikachu-banner.svg';
import Logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={Logo} alt="Pikachu logo" />
          <ul>
            <li>Home</li>
            <li>Pokedex</li>
            <li>Legendaries</li>
            <li>Documentation</li>
          </ul>
        </Header>
        <Content>
          <CoverText>
            <h1>Find all your favorite Pokemon</h1>
            <h2>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </h2>
          </CoverText>

          <Form>
            <button type="submit">Search pokemons</button>
          </Form>
        </Content>
        <Images>
          <img src={Pikachu} alt="Picachu" />
        </Images>
        <Footer>
          <p>Layout credit: team Platzi Master</p>
          <p>Carol Dill 2020</p>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
