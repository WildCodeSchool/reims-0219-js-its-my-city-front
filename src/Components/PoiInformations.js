import React from 'react';
import './ComponentsCSS/PoiInformation.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  specificPoiInfos: state.specificPoiInfos,
  InformationPoiInfos: state.InformationPoiInfos,
});

const PoiInformation = ({ dispatch, specificPoiInfos, InformationPoiInfos }) => (
  <div>
    <button
      className={InformationPoiInfos ? 'closeButtonInformationPageTop' : 'closeButtonInformationPageBottom'}
      type="button"
      onClick={() => dispatch({ type: 'CLOSE_POI_INFOS', specificPoiInfos: [] })}
    >
X
    </button>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <div
      className={InformationPoiInfos ? 'informationPageTop' : 'informationPageBottom'}
      onClick={() => dispatch({ type: 'TRANSITION_POI_INFOS', InformationPoiInfos: !InformationPoiInfos })}
      role="button"
      tabIndex="0"
    >
      <p className="poiName">{specificPoiInfos.name}</p>
      <hr />
      <div className="generalInfosContainer">
        <p className="adress">Adresse</p>
        <p className="distance">Distance</p>
        <img src={specificPoiInfos.picture_url} className={InformationPoiInfos ? 'informationPicture' : 'informationPicture-Bottom'} alt={specificPoiInfos.name} />
        <div className={InformationPoiInfos ? 'informationUser' : 'informationUser-Bottom'}>
          <p>{specificPoiInfos.author}</p>
          <p>
          le
            {specificPoiInfos.creation_date}
          </p>
        </div>
      </div>
      <div className={InformationPoiInfos ? 'grades' : 'grades-Bottom'}>
        <hr />
        <h2>Informations complémentaires</h2>
        <p>
        Note moyenne :
          {specificPoiInfos.grades.average}
        </p>
        <p>
        Accessibilité :
          {specificPoiInfos.grades.accessibility}
        </p>
        <p>
        Etat :
          {specificPoiInfos.grades.condition}
        </p>
        <p>
        Fonctionnalité :
          {specificPoiInfos.grades.functional}
        </p>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(PoiInformation);
