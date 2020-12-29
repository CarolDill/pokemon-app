import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Dashboard,
  ContentText,
  Filter,
  BoxContainer,
  Card,
  PokemonContent,
  PokemonDescription,
  PokemonType,
  Color,
  Description,
  PokemonImg,
  SkillDescription,
  Footer,
} from './styles';
import Logo from '../../assets/logo.svg';

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
  attack: number;
  defense: number;
  pokemonTypes: Array<string>;
}

const Details: React.FC = () => {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [isLoading, setLoading] = useState(true);

  const loadData = async (): Promise<void> => {
    const {
      data: { results },
    } = await api.get('/pokemon/?limit=40');

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

        const skills = stats.map(statistic => {
          const { base_stat: rate } = statistic;

          return rate;
        });

        const attack = skills.slice(1, 2)[0];
        const defense = skills.slice(2, 3)[0];

        const pokemonTypes: Array<string> = [];

        types.map(type => {
          const {
            type: { name: nameOfPokemonType },
          } = type;

          return pokemonTypes.push(nameOfPokemonType);
        });

        return { id, name, imagePath, attack, defense, pokemonTypes };
      }),
    );

    setPokedex(pokemonDB);
    setLoading(false);
  };

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
          <Dashboard>
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

            <BoxContainer>
              {pokedex.map(pokemon => (
                <Card>
                  <PokemonContent>
                    <PokemonDescription>
                      <h2>
                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                      </h2>
                      <Description>
                        <SkillDescription>
                          <div>
                            <p>{pokemon.attack}</p>
                          </div>
                          <h3>Attack</h3>
                        </SkillDescription>

                        <SkillDescription>
                          <div>
                            <p>{pokemon.defense}</p>
                          </div>
                          <h3>Defense</h3>
                        </SkillDescription>
                      </Description>
                    </PokemonDescription>
                    <PokemonImg>
                      <img src={pokemon.imagePath} alt={pokemon.name} />
                    </PokemonImg>
                  </PokemonContent>

                  <PokemonType>
                    {pokemon.pokemonTypes.map(type => (
                      <Color property={type}>
                        <h2>{type}</h2>
                      </Color>
                    ))}
                  </PokemonType>
                </Card>
              ))}
            </BoxContainer>
          </Dashboard>
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
