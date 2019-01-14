import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SigninForm from '../Components/SigninForm';
import { signinWithEmailAndPassword } from '../Actions/auth';

const Signin = ({ signinWithEmailAndPassword }) => {
  const handleSubmit = ({ name, email, password }) => {
    signinWithEmailAndPassword({ name, email, password });
  }

  return (
    <div>
      <h1 className="text-center">Crear cuenta</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <SigninForm onSubmit={handleSubmit} />
        </Col>
      </Row>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signinWithEmailAndPassword: payload => signinWithEmailAndPassword(dispatch, payload),
});

Signin.propTypes = {
  signinWithEmailAndPassword: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Signin);
