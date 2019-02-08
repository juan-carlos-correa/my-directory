import React from 'react';
import { Row, Col } from 'reactstrap';
import UserFormWithControlled from '../Components/UserFormWithControlled';

const AddUserContainer = () => {
  const handleSubmit = (values) => {
    console.log('submit', values)
  }

  return (
    <section>
      <Row className="justify-content-center">
        <Col xs="12" sm="8" md="6">
          <h2 className="text-center">Invitar usuario</h2>
          <UserFormWithControlled handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </section>
  );
}

export default AddUserContainer;
