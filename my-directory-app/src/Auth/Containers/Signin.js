import React from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SigninFormWithControlled from '../Components/SigninFormWithControlled';
import { signinWithEmailAndPassword } from '../Actions/signin';
import FetchStatus from '../../Utils/Components/FetchStatus';

const Signin = ({ fetch, signinWithEmailAndPassword, user }) => {
  const { isLoading, errorMsg } = fetch;
  const { emailVerified, email } = user;

  const handleSubmit = ({ email, password }) => {
    signinWithEmailAndPassword({ email, password });
  };

  const sendEmailVerification = () => {
    console.log('send email')
  }

  return (
    <div>
      <h1 className="text-center">Iniciar sesión</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <FetchStatus {...fetch} />
          {
            email && !emailVerified && (
              <Alert color="info">
                <a className="alert-link" href="javascript:void(0)" onClick={() => sendEmailVerification()}>
                  Enviar
                </a>{' '}
                email de verificación
              </Alert>
            )
          }
          <SigninFormWithControlled
            handleSubmit={handleSubmit}
            isSigninLoading={isLoading}
          />
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  fetch: state.fetch,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  signinWithEmailAndPassword: (payload) => signinWithEmailAndPassword(dispatch, payload),
})

Signin.propTypes = {
  fetch: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    successMsg: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }),
  signinWithEmailAndPassword: PropTypes.func.isRequired,
  user: PropTypes.shape({
    emailVerified: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
