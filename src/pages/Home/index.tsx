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

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <ul>
            <li>Home</li>
            <li>Pokedex</li>
            <li>Documentation</li>
            <li>See Pokemons</li>
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
            <input placeholder="Type pokemon name" />
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
