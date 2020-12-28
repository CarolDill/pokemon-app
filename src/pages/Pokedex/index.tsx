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

interface PokemonDetails {
  id: number;
  sprites: {
    other: {
      dream_world: { front_default: string };
    };
  };
  stats: PokemonStats[];
  types: PokemonTypes[];
}

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  imagePath: string;
  pokemonSkill: {
    rate: number;
    skill: string;
  };
  pokemonTypes: Array<string>;
}

const Details: React.FC = () => {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [isLoading, setLoading] = useState(true);

  const loadData = async (): Promise<void> => {
    const {
      data: { results },
    } = await api.get('/pokemon/?limit=5');

    const pokemonDB: Pokemon[] = await Promise.all(
      results.map(async (pokemon: { name: string }) => {
        const { name } = pokemon;

        const { data: pokemonDetails } = await api.get<PokemonDetails>(
          `/pokemon/${name}`,
        );

        const {
          id,
          sprites: {
            other: {
              dream_world: { front_default: imagePath },
            },
          },
          stats,
          types,
        } = pokemonDetails;

        const pokemonSkill = stats.map(statistic => {
          const {
            base_stat: rate,
            stat: { name: skill },
          } = statistic;

          return { rate, skill };
        });

        const pokemonTypes: Array<string> = [];

        types.map(type => {
          const {
            type: { name: nameOfPokemonType },
          } = type;

          return pokemonTypes.push(nameOfPokemonType);
        });

        return { id, name, imagePath, pokemonSkill, pokemonTypes };
      }),
    );

    setPokedex(pokemonDB);
    setLoading(false);
  };

  console.log(pokedex);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  return (
    <>
      {!isLoading ? (
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
              {pokedex.map(pokemon => (
                <span>
                  <>
                    <section>
                      <h1>{pokemon.name}</h1>
                      <div className="circle">
                        <div>{pokemon.pokemonSkill.rate}</div>
                        <div>{pokemon.pokemonSkill.skill}</div>
                      </div>
                      <div className="info">
                        {pokemon.pokemonTypes.map(type => (
                          <button className="grass">{type}</button>
                        ))}
                        {/* <button className="poison">Poison</button> */}
                      </div>
                    </section>
                    <img src={pokemon.imagePath} alt="Pikachu image" />
                  </>
                </span>
              ))}
              {/* <section>
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
                </section> */}
              {/* <img src={CardImg} alt="Pikachu image" /> */}
              {/* </span> */}
            </Card>
          </Background>
          <Footer>
            <p>Layout credit: team Platzi Master</p>
            <p>Carol Dill 2020</p>
          </Footer>
        </Container>
      ) : (
        <Container>
          <p>Loading...</p>
        </Container>
      )}
    </>
  );
};

export default Details;
