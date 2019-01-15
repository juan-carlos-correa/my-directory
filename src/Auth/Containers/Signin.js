import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SigninForm from '../Components/SigninForm';
import { signinWithEmailAndPassword } from '../Actions/auth';

const Signin = ({ signin, signinWithEmailAndPassword }) => {
  const handleSubmit = ({ email, password }) => {
    signinWithEmailAndPassword({ email, password });
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

const mapDispatchToProps = dispatch => ({
  signinWithEmailAndPassword: (payload) => signinWithEmailAndPassword(dispatch, payload),
})

Signin.propTypes = {
  signin: PropTypes.shape({
    isSigninError: PropTypes.bool.isRequired,
    isSigninSuccess: PropTypes.bool.isRequired,
    isSigninLoading: PropTypes.bool.isRequired,
    signinErrorMessage: PropTypes.string.isRequired,
    signinSuccessMessage: PropTypes.string.isRequired,
  }),
  signinWithEmailAndPassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
