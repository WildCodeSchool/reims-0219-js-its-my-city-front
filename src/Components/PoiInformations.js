
import React from 'react';
import './ComponentsCSS/PoiInformation.scss';
import { connect } from 'react-redux';
import sliceDate from '../Functions/FunctionSliceDate';
import calculateDistance from '../Functions/CalculateDistance';
import { ReactComponent as Close } from './pictos/CancelButton.svg';
import { ReactComponent as Triangle } from './pictos/Black_triangle.svg';
import PoiRating from './CreateNewPoi/PoiRating';

const mapStateToProps = state => ({
  specificPoiInfos: state.pois.specificPoiInfos,
  InformationPoiInfos: state.pois.InformationPoiInfos,
  geolocCoordonnees: state.pois.geolocCoordonnees,
  areOthersRatingDisplayed: state.pois.areOthersRatingDisplayed,
});

const PoiInformation = ({
  dispatch, specificPoiInfos, InformationPoiInfos, geolocCoordonnees, areOthersRatingDisplayed,
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
      >
        <Close
          className="closePoiInformation"
          type="button"
          onClick={() => dispatch({ type: 'CLOSE_POI_INFOS', specificPoiInfos: [] })}
        />
        <div
          className="poiName"
          onClick={() => dispatch({ type: 'TRANSITION_POI_INFOS' })}
          onKeyPress={() => dispatch({ type: 'TRANSITION_POI_INFOS' })}
          role="button"
          tabIndex="0"
        >
          {specificPoiInfos.name}
        </div>
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
          <PoiRating
            rating={specificPoiInfos.grades.average}
            title="Note moyenne :"
            canClick={false}
          />
          <div
            style={{
              display: 'inline',
            }}
            onClick={() => dispatch({ type: 'SHOW_ALL_RATINGS' })}
            onKeyPress={() => dispatch({ type: 'SHOW_ALL_RATINGS' })}
            role="button"
            tabIndex="0"
          >
            <Triangle style={{
              transform: areOthersRatingDisplayed ? 'rotate(0deg)' : 'rotate(30deg)',
            }}
            />
            <div className="gradesText">
              {areOthersRatingDisplayed ? 'Toutes les notes' : 'Voir toutes les notes'}
            </div>
          </div>
          {areOthersRatingDisplayed && poiEvaluations.map(evaluation => (
            <PoiRating
              key={evaluation.title}
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
