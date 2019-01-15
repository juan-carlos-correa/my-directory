import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SigninForm from '../Components/SigninForm';

const Signin = ({ signin }) => {
  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  }

  return (
    <div>
      <h1 className="text-center">Iniciar sesión</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <SigninForm onSubmit={handleSubmit} />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  signin: state.auth.signin,
});

Signin.propTypes = {
  signin: PropTypes.shape({
    isSigninError: PropTypes.bool.isRequired,
    isSigninSuccess: PropTypes.bool.isRequired,
    isSigninLoading: PropTypes.bool.isRequired,
    signinErrorMessage: PropTypes.string.isRequired,
    signinSuccessMessage: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Signin);
