import React from 'react';

import { CoverText, Form, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <CoverText>
        <h1>Find all your favorite Pokemon</h1>
        <h2>
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </h2>
      </CoverText>

      <Form>
        <input placeholder="Type pokemon name" />
        <button type="submit">See pokemons</button>
      </Form>

      <Footer>
        <p>Layout credit: team Platzi Master</p>
        <p>Carol Dill 2020</p>
      </Footer>
    </>
  );
};

export default Home;
