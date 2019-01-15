import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../Components/SignupForm';
import { signupWithEmailAndPassword } from '../Actions/auth';

const Signup = ({ signupWithEmailAndPassword, signup }) => {
  const {
    isSignupSuccess,
    signupErrorMessage,
    isSignupError,
    signupSuccessMessage,
    isLoading,
  } = signup;

  const handleSubmit = ({ name, email, password }) => {
    signupWithEmailAndPassword({ name, email, password });
  }

  return (
    <div>
      <h1 className="text-center">Crear cuenta</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <Alert color="danger" isOpen={isSignupError}>
            {signupErrorMessage}
          </Alert>
          <Alert color="success" isOpen={isSignupSuccess}>
            {signupSuccessMessage}
          </Alert>
          <SignupForm
            onSubmit={handleSubmit}
            isSignupSuccess={isSignupSuccess}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  signup: state.auth.signup,
});

const mapDispatchToProps = dispatch => ({
  signupWithEmailAndPassword: payload => signupWithEmailAndPassword(dispatch, payload),
});

Signup.propTypes = {
  signupWithEmailAndPassword: PropTypes.func.isRequired,
  signup: PropTypes.shape({
    isSignupSuccess: PropTypes.bool.isRequired,
    isSignupError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    signupErrorMessage: PropTypes.string.isRequired,
    signupSuccessMessage: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
