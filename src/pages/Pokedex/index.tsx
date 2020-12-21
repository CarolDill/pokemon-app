import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Background,
  ContentText,
  Filter,
  Card,
  Footer,
} from './styles';
import Logo from '../../assets/logo.svg';
import CardImg from '../../assets/pikachucardbox.svg';

interface PokemonName {
  results: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      front_default: string;
    };
  };
}

const Details: React.FC = () => {
  const [newPokeName, setNewPokeName] = useState<PokemonName | null>(null);
  const [newPoke, setNewPoke] = useState<Pokemon>();

  useEffect(() => {
    api.get(`/pokemon`).then(response => {
      setNewPokeName(response.data);
      console.log(response.data);
    });

    api.get(`/pokemon/${newPokeName?.results.name}`).then(response => {
      setNewPoke(response.data);
      console.log(response.data);
    });
  }, []);

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
        <Background>
          <ContentText>
            <h1>
              Many <strong>pokemons</strong> for you to choose your favorite
            </h1>
            <input
              // value={newPoke}
              // onChange={e => setNewPoke(e.target.value)}
              placeholder="Find your pokemon"
            />
          </ContentText>
          <Filter></Filter>
          <Card>
            <span>
              <section>
                <h1>Pikachu</h1>
                <div className="circle">
                  <div>419</div>
                  <div>49</div>
                </div>
                <div className="subtitle">
                  <p>Attack</p>
                  <p>Defense</p>
                </div>
                <div className="info">
                  <button className="grass">Grass</button>
                  <button className="poison">Poison</button>
                </div>
              </section>
              <img src={CardImg} alt="Pikachu image" />
            </span>
          </Card>
        </Background>
        <Footer>
          <p>Layout credit: team Platzi Master</p>
          <p>Carol Dill 2020</p>
        </Footer>
      </Container>
    </>
  );
};

export default Details;
