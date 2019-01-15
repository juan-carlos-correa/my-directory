import React from 'react';
import { Row, Col } from 'reactstrap';
import SigninForm from '../Components/SigninForm';

const Signin = () => {
  return (
    <div>
      <h1 className="text-center">Iniciar sesión</h1>
      <Row className="justify-content-center">
        <Col sm="6">
          <SigninForm />
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
