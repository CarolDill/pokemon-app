import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Pikachu from '../../assets/pikachu-banner.svg';
import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  Content,
  CoverText,
  Form,
  Images,
  Footer,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={Logo} alt="Pikachu logo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pokedex">Pokedex</a>
            </li>
            <li>
              <a href="/legendaries">Legendaries</a>
            </li>
            <li>
              <a href="https://pokeapi.co/" target="_blank">
                Documentation
              </a>
            </li>
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
