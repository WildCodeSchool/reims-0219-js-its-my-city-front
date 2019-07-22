import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import validate from './validate';
import PreviousPageButton from './PreviousPageButton';
import Picture from '../ComponentPins/Picture';

const mapStateToProps = state => ({
  file: state.dataForm.file,
  previewPic: state.dataForm.previewPic,
});

const storeNewPictureData = (e) => {
  const formData = new FormData();
  formData.append('file', e.target.files[0]);
  return formData;
};

const uploadFileHandler = (e, formData, dispatch) => {
  e.preventDefault();
  e.stopPropagation();
  axios.post(`${process.env.REACT_APP_API_URL}/pois/picture`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  dispatch({
    type: 'NEXT_PAGE',
  });
};

let TakeAPicture = ({
  file, dispatch, previewPic,
}) => (
  <div className="formContainer">
    <article className="picturePage">
      <div>
        <PreviousPageButton />
      </div>
      <p className="pictureStep">Etape 2/5</p>
      <div className="textPage">
      Veuillez fournir une photo en cliquant sur le logo ci-dessous.
      </div>
      <div style={{ gridColumn: '2/4' }}>
        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={e => uploadFileHandler(e, file, dispatch)}
        >
          <div className="pictureUploadWrapper">
            <input
              type="file"
              name="upload"
              accept="image/*"
              onChange={e => dispatch({ type: 'INSERT_PICTURE', file: storeNewPictureData(e), previewPic: URL.createObjectURL(e.target.files[0]) })}
              required
            />
            {previewPic === '' ? <Picture /> : <img src={previewPic} alt="preview" />}
          </div>
          <button
            type="submit"
            value="upload"
            className="buttonFormNext"
          >
          Suivant
          </button>
        </form>
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
