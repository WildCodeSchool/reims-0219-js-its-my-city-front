
import React from 'react';
import './ComponentsCSS/PoiInformation.scss';
import { connect } from 'react-redux';
import sliceDate from '../Functions/FunctionSliceDate';
import calculateDistance from '../Functions/CalculateDistance';
import { ReactComponent as Close } from './pictos/CancelButton.svg';
import PoiRating from './CreateNewPoi/PoiRating';

const mapStateToProps = state => ({
  specificPoiInfos: state.pois.specificPoiInfos,
  InformationPoiInfos: state.pois.InformationPoiInfos,
  geolocCoordonnees: state.pois.geolocCoordonnees,
});

const PoiInformation = ({
  dispatch, specificPoiInfos, InformationPoiInfos, geolocCoordonnees, handleKeyPress,
}) => {
  const poiEvaluations = [
    { title: 'Accessibilité :', rating: specificPoiInfos.grades.accessibility },
    { title: 'Etat :', rating: specificPoiInfos.grades.condition },
    { title: 'Fonctionnalité :', rating: specificPoiInfos.grades.functional },
  ];
  return (
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
          <img
            src={`${process.env.REACT_APP_API_URL}/pois/images/${specificPoiInfos.picture_url}`}
            className={InformationPoiInfos ? 'informationPicture' : 'informationPicture-Bottom'}
            alt={specificPoiInfos.name}
          />
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
          <button type="button">Plus</button>
          <PoiRating
            rating={specificPoiInfos.grades.average}
            title="Note moyenne :"
            canClick={false}
          />
          {false && poiEvaluations.map(evaluation => (
            <PoiRating
              rating={evaluation.rating}
              title={evaluation.title}
              canClick={false}
            />
          ))
          }
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps)(PoiInformation);
