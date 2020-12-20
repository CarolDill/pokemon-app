import React from 'react';

import { Container, Header, Content, OtherLegendaries, Footer } from './styles';

import Logo from '../../assets/logo.svg';
import LegendariesImage from '../../assets/legendaries.svg';
import Dragonair from '../../assets/dragonair.svg';
import CardCharge from '../../assets/cardcharge.svg';
import Flareon from '../../assets/flareon.svg';

const Legendaries: React.FC = () => {
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
          <h1>Legendaries</h1>
          <div className="Image">
            <img src={LegendariesImage} alt="Legendaries picture" />
            <section>
              <h2>MewTwo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores sint iure repudiandae dolore? Est omnis sequi nostrum
                adipisci voluptate eaque. Earum, veritatis totam! Magnam
                voluptate, delectus voluptas harum vel omnis.
              </p>
              <div className="staticsCards">
                <div className="statisticsPokemon">
                  <h3>Healthy Points</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Experience</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
              </div>
            </section>
          </div>
          <OtherLegendaries>
            <p>space</p>
          </OtherLegendaries>

          <h1>Stronger</h1>
          <div className="Image">
            <img src={Dragonair} alt="Dragonair picture" />
            <section>
              <h2>Dragonair</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores sint iure repudiandae dolore? Est omnis sequi nostrum
                adipisci voluptate eaque. Earum, veritatis totam! Magnam
                voluptate, delectus voluptas harum vel omnis.
              </p>
              <div className="staticsCards">
                <div className="statisticsPokemon">
                  <h3>Healthy Points</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Experience</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
              </div>
            </section>
          </div>
          <OtherLegendaries>
            <p>space</p>
          </OtherLegendaries>

          <h1>Weaker</h1>
          <div className="Image">
            <img src={Flareon} alt="Flareon picture" />
            <section>
              <h2>Flareon</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores sint iure repudiandae dolore? Est omnis sequi nostrum
                adipisci voluptate eaque. Earum, veritatis totam! Magnam
                voluptate, delectus voluptas harum vel omnis.
              </p>
              <div className="staticsCards">
                <div className="statisticsPokemon">
                  <h3>Healthy Points</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Experience</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Attack</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
                <div className="statisticsPokemon">
                  <h3>Special Defense</h3>
                  <h4>1000,000</h4>
                  <img src={CardCharge} alt="Charge bar" />
                </div>
              </div>
            </section>
          </div>
          <OtherLegendaries>
            <p>space</p>
          </OtherLegendaries>
        </Content>
        <Footer>
          <p>Layout credit: team Platzi Master</p>
          <p>Carol Dill 2020</p>
        </Footer>
      </Container>
    </>
  );
};

export default Legendaries;
