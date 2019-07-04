import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import validate from './validate';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

const mapStateToProps = state => ({
  page: state.pois.formPage,
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
  axios.post(`${process.env.REACT_APP_API_URL}/pois/picture`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

let TakeAPicture = ({
  file, dispatch,
}) => (
  <div>
    <article>
      <div>
        <form encType="multipart/form-data" method="post" onSubmit={e => uploadFileHandler(e, file)}>
          <input
            type="file"
            name="upload"
            onChange={e => dispatch({ type: 'INSERT_PICTURE', file: storeNewPictureData(e) })}
            required
          />
          <button type="submit" value="upload">Envoyer</button>
        </form>
      </div>
      <div>
        <PreviousPageButton />
        <NextPageButton />
      </div>
    </article>
  </div>
);

TakeAPicture = connect(
  mapStateToProps,
)(TakeAPicture);

export default reduxForm({
  form: 'poiCreation', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(TakeAPicture);
