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
        <Col sm="6">
          <h2 className="text-center">Invitar usuario</h2>
          <UserFormWithControlled handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </section>
  );
}

export default AddUserContainer;
