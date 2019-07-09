
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
          <div
            style={{ display: 'inline' }}
            onClick={() => dispatch({ type: 'SHOW_ALL_RATINGS' })}
            onKeyPress={() => dispatch({ type: 'SHOW_ALL_RATINGS' })}
            role="button"
            tabIndex="0"
          >
            <img
              alt="Arrow to display more ratings"
              style={{ maxWidth: '7vw', transform: areOthersRatingDisplayed ? 'rotate(45deg)' : 'rotate(-45deg)' }}

              src="data:image/png;base64,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"
            />
          </div>

          <PoiRating
            rating={specificPoiInfos.grades.average}
            title="Note moyenne :"
            canClick={false}
          />
          {!areOthersRatingDisplayed && poiEvaluations.map(evaluation => (
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
