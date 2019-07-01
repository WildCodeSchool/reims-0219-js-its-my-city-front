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

const uploadFileHandler = (e) => {
  const formData = new FormData();
  formData.append('file', e.target.files[0]);
  axios.post('http://localhost:3001/pois/picture', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const SelectedNewPicture = () => (
  <div className="poi-create">
    <div className="poi-name">
      <form action="/upload" encType="multipart/form-data" method="post">
        <input
          type="file"
          name="upload"
          onChange={e => uploadFileHandler(e)}
          required
        />
        <button type="submit" value="upload">Envoyer</button>
      </form>
    </div>
  </div>
);

export default connect(mapStateToProps)(SelectedNewPicture);
