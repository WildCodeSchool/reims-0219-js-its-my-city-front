import React from 'react';
import { connect } from 'react-redux';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCloseSvg from '../ComponentPins/BottomPageCloseSvg';
import Math from './math.png';
import '../ComponentsCSS/UserPage.scss';

const mapStateToProps = state => ({
});

const UserPage = ({ dispatch }) => (
  <div className="UserPage">
    <TopPageSvg />
    <div className="pageContent">

      <h2 className="pageTitle">D4rkNinj@ 51100</h2>

      <div className="userPicture">
        <img src={Math} alt="UserPicture" />
      </div>

      <div className="userInformations">
        <div>
          <h3>
                Niveau:
          </h3>
          <p>
                Maître de l'exploration
          </p>
          <h3>
                Bio :
          </h3>
          <p>
                Je m'appelle Matthieu, je suis un jeune emo de 42 ans et j'accorde beaucoup d'importance au partage.
          </p>
        </div>

        <div>
          <h3>
                Dernières contributions:
          </h3>
          <ul>
            <li>Table de ping pong - Parc Léo Lagrange</li>
            <li>Composteur - Saint-Brice</li>
            <li>Container à verre </li>
          </ul>
        </div>
      </div>
    </div>
    <BottomPageCloseSvg />
  </div>

);

export default connect(mapStateToProps)(UserPage);
