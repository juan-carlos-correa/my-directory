import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../Components/SignupForm';
import { signinWithEmailAndPassword } from '../Actions/auth';

const Signup = ({ signinWithEmailAndPassword, signup }) => {
  const { isSignupSuccess, signupErrorMessage, isSignupError } = signup;

  const handleSubmit = ({ name, email, password }) => {
    signinWithEmailAndPassword({ name, email, password });
  }

  return (
    <div>
      <h1 className="text-center">Crear cuenta</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <Alert color="danger" isOpen={isSignupError}>{signupErrorMessage}</Alert>
          <Alert color="success" isOpen={isSignupSuccess}>
            La cuenta ha sido creada con éxito
          </Alert>
          <SignupForm onSubmit={handleSubmit} isSignupSuccess={isSignupSuccess} />
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  signup: state.auth.signup,
});

const mapDispatchToProps = dispatch => ({
  signinWithEmailAndPassword: payload => signinWithEmailAndPassword(dispatch, payload),
});

Signup.propTypes = {
  signinWithEmailAndPassword: PropTypes.func.isRequired,
  signup: PropTypes.shape({
    isSignupSuccess: PropTypes.bool.isRequired,
    isSignupError: PropTypes.bool.isRequired,
    signupErrorMessage: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
