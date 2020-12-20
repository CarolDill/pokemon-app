import React from 'react';

import { Container, Header, ContentText, Filter, Card, Footer } from './styles';
import Logo from '../../assets/logo.svg';
import CardImg from '../../assets/boximg.svg';

const Details: React.FC = () => {
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
        <ContentText>
          <h1>
            Many <strong>pokemons</strong> for you to choose your favorite
          </h1>
          <input placeholder="Find your pokemon" />
        </ContentText>
        <Filter></Filter>
        <Card>
          <span>
            <section>
              <p>Pikachu</p>
              <div className="circle">
                <p>419</p>
                <p>49</p>
              </div>
              <div className="subtitle">
                <p>Attack</p>
                <p>Defense</p>
              </div>
              <div className="info">
                <h1>Grass</h1>
                <h2>Poison</h2>
              </div>
            </section>
            <img src={CardImg} alt="Pikachu image" />
          </span>
        </Card>
        <Footer>
          <p>Layout credit: team Platzi Master</p>
          <p>Carol Dill 2020</p>
        </Footer>
      </Container>
    </>
  );
};

export default Details;
