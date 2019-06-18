/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import './ComponentsCSS/createPoiForm.css';
import axios from 'axios';


class CreatePoiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      keywordOne: '',
      keywordTwo: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const url = '';
    const data = this.state;

    axios.post(url, data)
      .then(res => console.log(`${res} has been properly sent`))
      .catch(err => console.log(err));
  };

  render() {
    return (
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
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="keywordOne">Catégorie:</label>
            <br />
            <select id="keywordOne" name="keywordOne" onChange={this.onChange} required>
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
            <select id="keywordTwo" name="keywordTwo" onChange={this.onChange}>
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
  }
}
export default CreatePoiForm;
