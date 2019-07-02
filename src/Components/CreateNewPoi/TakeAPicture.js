import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import axios from 'axios';
import validate from './validate';

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
  page, file, dispatch,
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
    </div>
    <div>
      <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE', page: page - 1 })} type="button" className="next">Précédent</button>
      <button onClick={() => dispatch({ type: 'NEXT_PAGE', page: page + 1 })} type="submit" className="next">Suivant</button>
    </div>
  </div>
);

TakeAPicture = connect(
  mapStateToProps,
)(TakeAPicture);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(TakeAPicture);
