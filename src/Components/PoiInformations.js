
import React from 'react';
import './ComponentsCSS/PoiInformation.scss';
import { connect } from 'react-redux';
import sliceDate from '../Functions/FunctionSliceDate';
import calculateDistance from '../Functions/CalculateDistance';
import { ReactComponent as Close } from './pictos/CancelButton.svg';

const mapStateToProps = state => ({
  specificPoiInfos: state.pois.specificPoiInfos,
  InformationPoiInfos: state.pois.InformationPoiInfos,
  geolocCoordonnees: state.pois.geolocCoordonnees,
});

const PoiInformation = ({
  dispatch, specificPoiInfos, InformationPoiInfos, geolocCoordonnees, handleKeyPress,
}) => (
  <div>
    <div
      className={InformationPoiInfos ? 'informationPageTop' : 'informationPageBottom'}
      onClick={() => dispatch({ type: 'TRANSITION_POI_INFOS', InformationPoiInfos: !InformationPoiInfos })}
      role="button"
      tabIndex="0"
      onKeyPress={handleKeyPress}
    >
      <Close
        className="closePoiInformation"
        type="button"
        onClick={() => dispatch({ type: 'CLOSE_POI_INFOS', specificPoiInfos: [] })}
      />

      <p className="poiName">{specificPoiInfos.name}</p>
      <hr />
      <div className="generalInfosContainer">
        <p className="adress">Adresse</p>
        <p className="distance">
          {calculateDistance(
            geolocCoordonnees[0],
            geolocCoordonnees[1],
            specificPoiInfos.localisation[0],
            specificPoiInfos.localisation[1],
          )}
          {' '}
        km
        </p>
        <img src={specificPoiInfos.picture_url} className={InformationPoiInfos ? 'informationPicture' : 'informationPicture-Bottom'} alt={specificPoiInfos.name} />
        <div className={InformationPoiInfos ? 'informationUser' : 'informationUser-Bottom'}>
          <p>
Découvert par
            {' '}
            {specificPoiInfos.author}
          </p>
          <p>
          le
            {' '}
            {sliceDate(specificPoiInfos.creation_date)}
          </p>
        </div>
      </div>
      <div className={InformationPoiInfos ? 'grades' : 'grades-Bottom'}>
        <p className="infos">Informations complémentaires</p>
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
