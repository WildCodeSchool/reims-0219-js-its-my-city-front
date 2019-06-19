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
});

const poiCreationDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
console.log(poiCreationDate);

// axios.post(url, data)
//   .then(res => console.log(`${res} has been properly sent`))
//   .catch(err => console.log(err));

const CreatePoiForm = ({ dispatch, name }) => (
  // eslint-disable-next-line no-unused-expressions
  <div>
    <form className="poi-create" method="POST" encType="multipart/form-data">

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
        <select id="keywordOne" name="keywordOne" onChange={e => dispatch({ type: 'HANDLE_FORM_K1_CHANGE', keywordOne: e.target.value })} required>
          <option value="">Choisissez une catégorie (obligatoire)</option>
          <option value="nature">Nature</option>
          <option value="sport">Sport</option>
          <option value="attraction">Attraction</option>
          <option value="monument">Monument</option>
          <option value="utilitaire">Utilitaire</option>
          <option value="hygiène">Hygiène</option>
        </select>
      </div>

      <div>
        <label htmlFor="keywordTwo">Sous-catégorie:</label>
        <br />
        <select id="keywordTwo" name="keywordTwo" onChange={e => dispatch({ type: 'HANDLE_FORM_K2_CHANGE', keywordTwo: e.target.value })}>
          <option value="">Choisissez une sous-catégorie (facultatif)</option>
          <option value="sports_collectifs">Sports Collectifs</option>
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
