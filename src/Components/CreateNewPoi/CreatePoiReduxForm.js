import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreatePoiFirstPage from './CreatePoiFirstPage';
import CreatePoiSecondPage from './CreatePoiSecondPage';
import CreatePoiThirdPage from './CreatePoiThirdPage';
import '../ComponentsCSS/createPoiForm.scss';

class CreatePoiForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="poi-create">
        {page === 1 && <CreatePoiFirstPage onSubmit={this.nextPage} />}
        {page === 2
          && (
          <CreatePoiSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
          )}
        {page === 3
          && (
          <CreatePoiThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
          )}
      </div>
    );
  }
}

CreatePoiForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreatePoiForm;
