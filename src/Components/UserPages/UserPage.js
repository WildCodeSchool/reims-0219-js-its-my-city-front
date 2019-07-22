import React from 'react';
import { connect } from 'react-redux';
import TopPageSvg from '../ComponentPins/TopPageSvg';
import BottomPageCheckSvg from '../ComponentPins/BottomPageCheckSvg';
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                Cras elementum ultrices diam. Maecenas ligula massa, varius a,
                semper congue, euismod non, mi.
          </p>
        </div>

        <div>
          <h3>
                Dernière contribution:
          </h3>
          <p>
                Quartier Libre Reims - La Petite Halle
          </p>
        </div>
      </div>
    </div>
    <BottomPageCheckSvg />
  </div>

);

export default connect(mapStateToProps)(UserPage);
