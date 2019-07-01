import React from 'react';
import { connect } from 'react-redux';
import '../ComponentsCSS/createPoiForm.scss';

const mapStateToProps = state => ({
  file: state.pois.file,
});
const poiFourthPageFields = ({
  dispatch, file,
}) => (
  <div className="poi-create">
    <div className="poi-name">
      <input
        type="file"
        id="fileItem"
        onChange={e => dispatch({ type: 'INSERT_PICTURE', file: URL.createObjectURL(e.target.files[0]) })}
        required
      />
      <img className="filePreview" src={file} alt="Aperçu de l'img" />
    </div>
  </div>
);

export default connect(mapStateToProps)(poiFourthPageFields);
