import React from 'react';
import './ComponentsCSS/createPoiForm.css';

const CreatePoiForm = () => (
  // eslint-disable-next-line no-unused-expressions
  <div>
    <form className="poi-create">

      <legend>Ajoutez un point d'intérêt</legend>
      <div className="form-data">
        <label htmlFor="poiName">Nom</label>
        <input
          type="text"
          id="poiName"
          name="poiName"
        />
      </div>

      <div className="form-data">
        <label htmlFor="latitude">Prénom</label>
        <input
          type="text"
          id="latitude"
          name="latitude"
        />
      </div>

      <div className="form-data">
        <label htmlFor="longitude">Prénom</label>
        <input
          type="text"
          id="longitude"
          name="longitude"
        />
      </div>
      <div className="form-data">
        <label htmlFor="keywordOne">Catégorie:</label>

        <select id="keywordOne">
          <option value="">--Choisissez une catégorie (obligatoire)--</option>
          <option value="nature">Nature</option>
          <option value="sport">Sport</option>
          <option value="attraction">Attraction</option>
          <option value="monument">Monument</option>
          <option value="utilitaire">Utilitaire</option>
          <option value="hygiène">Hygiène</option>
        </select>
      </div>

      <div className="form-data">
        <label htmlFor="keywordTwo">Sous-catégorie:</label>

        <select id="keywordTwo">
          <option value="">--Choisissez une sous-catégorie (facultatif)--</option>
          <option value="sports_collectifs">Sports Collectifs</option>
        </select>
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>

    </form>
  </div>
);

export default CreatePoiForm;
