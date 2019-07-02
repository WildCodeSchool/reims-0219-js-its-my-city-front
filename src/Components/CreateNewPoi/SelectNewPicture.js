/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';
import axios from 'axios';

const mapStateToProps = state => ({
  file: state.pois.file,
});

const storeNewPictureData = (e) => {
  const formData = new FormData();
  formData.append('file', e.target.files[0]);
  return formData;
};
const uploadFileHandler = (e, formData) => {
  e.preventDefault();
  e.stopPropagation();
  axios.post('http://localhost:3001/pois/picture', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const SelectedNewPicture = ({
  dispatch, file,
}) => (
  <div className="poi-create">
    <div className="poi-name">
      <form encType="multipart/form-data" method="post" onSubmit={e => uploadFileHandler(e, file)}>
        <input
          type="file"
          name="upload"
          onChange={e => dispatch({ type: 'INSERT_PICTURE', file: storeNewPictureData(e) })}
          required
        />
        <button type="submit" value="upload">Envoyer</button>
      </form>
      <div>
        <button
          type="button"
          className="closeButton"
          value="close"
          onClick={() => dispatch({ type: 'TOGGLE_POI_CREATION_FORM' })}
        >
          X
        </button>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps)(SelectedNewPicture);
