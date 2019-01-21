import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../Actions/user';
import ProfileForm from '../Components/ProfileForm';

const ProfileContainer = ({ user, updateUser }) => {
  const { uid } = user;

  const handleSubmit = ({ name, phone, job, subsidiary }) => {
    updateUser(uid, { name, phone, job, subsidiary });
  }

  return (
    <section className="mt-2">
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

const mapDispatchToProps = (dispatch) => ({
  updateUser: (uid, payload) => updateUser(dispatch, uid, payload),
});

ProfileContainer.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfileContainer);
