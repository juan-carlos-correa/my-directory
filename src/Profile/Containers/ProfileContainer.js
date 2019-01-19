import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProfileForm from '../Components/ProfileForm';

const ProfileContainer = ({ user }) => {
  const handleSubmit = () => console.log('handleSubmit');

  return (
    <section>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/main">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Mi perfil</BreadcrumbItem>
      </Breadcrumb>

      <Row className="justify-content-center">
        <Col sm="6">
          <ProfileForm user={user} handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </section>
  );
}

export default ProfileContainer;
