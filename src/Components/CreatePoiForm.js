/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import './ComponentsCSS/createPoiForm.css';
import axios from 'axios';

const mapStateToProps = state => ({
  name: state.name,
  keywordOne: state.keywordOne,
  keywordTwo: state.keywordTwo,
  geolocCoordonnees: state.geolocCoordonnees,
  poiKeywordsDisplay: state.poiKeywordsDisplay,
});

// get date and time to fill creation_date field in database
const poiCreationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

const getFirstKeywordId = (keyword) => {
  switch (keyword) {
    case 'Sport & Loisirs':
      return 1;
    case 'Nature & Développement Durable':
      return 2;
    case 'Services Publics':
      return 3;
    case 'Vie Quotidienne':
      return 4;
    case 'Transports & Mobilité':
      return 5;
    default:
      return keyword;
  }
};

const CreatePoiForm = ({
  dispatch, name, geolocCoordonnees, poiKeywordsDisplay, keywordOne,
}) => (
  // eslint-disable-next-line no-unused-expressions
  <div>
    <form
      className="poi-create"
      method="POST"
      encType="multipart/form-data"
      onSubmit={(e) => {
        axios.post('http://localhost:3001/pois', {
          name,
          latitude: geolocCoordonnees[0],
          longitude: geolocCoordonnees[1],
          creation_date: poiCreationDate,
          author_id: 1,
        })
          .then(res => console.log(`${res} has been properly sent`))
          .catch(err => console.log(err));
        e.preventDefault();
      }
    }
    >

      <legend>Ajoutez un point d'intérêt</legend>
      <div className="poi-address">
        <p>
          Adresse:
          <span> en fonction des coordonnées gps</span>
        </p>
      </div>


      <div className="poi-name">
        <label htmlFor="name">Nom</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={e => dispatch({ type: 'HANDLE_FORM_NAME_CHANGE', name: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="keywordOne">Catégorie:</label>
        <br />
        <select
          id="keywordOne"
          name="keywordOne"
          onChange={
          e => dispatch({
            type: 'HANDLE_FORM_K1_CHANGE',
            keywordOne: e.target.value,
          })}
          required
        >
          <option>
            Choissisez une catégorie
          </option>
          {poiKeywordsDisplay.filter(keyword => keyword.importance === 1)
            .map(keyword => (
              <option key={keyword.name} id={keyword.name} value={keyword.name}>
                {(keyword.name)}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label htmlFor="keywordTwo">Sous-catégorie (facultatif):</label>
        <br />
        <select
          id="keywordTwo"
          name="keywordTwo"
          onChange={
          e => dispatch({
            type: 'HANDLE_FORM_K2_CHANGE',
            keywordTwo: e.target.value,
          })
        }
        >
          <option>
            Choisissez une sous-catégorie
          </option>
          {poiKeywordsDisplay.filter(keyword => keyword.importance === 2
          && getFirstKeywordId(keywordOne) === keyword.parent_id)
            .map(keyword => (
              <option key={keyword.name} id={keyword.name} value={keyword.name}>
                {keyword.name.replace('_', ' ')}
              </option>
            ))}
        </select>
      </div>
      <br />
      <div className="poi-pic">
        <label htmlFor="poiPic">Ajouter une photo</label>
        <br />
        <input id="poiPic" type="file" name="poiPic" />
      </div>
      <div className="submit-button">
        <input type="submit" value="Envoyer" />
      </div>

    </form>
  </div>
);

export default connect(mapStateToProps)(CreatePoiForm);
