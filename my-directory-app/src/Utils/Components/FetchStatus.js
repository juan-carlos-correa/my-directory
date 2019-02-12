import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Alert } from 'reactstrap';

const FetchStatus = ({ isLoading, successMsg, errorMsg }) => {
  if (isLoading) {
    return (<Spinner />);
  }

  if (successMsg) {
    return (<Alert color="success" isOpen>{successMsg}</Alert>);
  }

  if (errorMsg) {
    return (<Alert color="danger" isOpen>{errorMsg}</Alert>);
  }

  return '';
};

FetchStatus.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  successMsg: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

export default FetchStatus;
