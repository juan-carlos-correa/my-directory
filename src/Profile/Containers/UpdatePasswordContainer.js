import React from 'react';
import {
  Row,
  Col,
  Spinner,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../Actions/user';
import UpdatePasswordForm from '../Components/UpdatePasswordForm';
import ProfileBreadCrumbs from '../Components/ProfileBreadCrumbs';

const ProfileContainer = ({ user, updateUser, fetch }) => {
  const { uid } = user;
  const { isLoading, successMsg, errorMsg } = fetch;

  const handleSubmit = ({ name, phone, job, subsidiary }) => {
    updateUser(uid, { name, phone, job, subsidiary });
  }

  return (
    <section className="mt-2">
      <ProfileBreadCrumbs current="Cambiar contraseña" />

      <Row className="justify-content-center">
        <Col sm="6">

          {
            isLoading && (
              <Col sm="12" className="text-center">
                <Spinner color="primary" />
              </Col>
            )
          }

          {
            !!successMsg.length && (
              <Alert color="success">{successMsg}</Alert>
            )
          }

          {
            !!errorMsg.length && (
              <Alert color="danger">{errorMsg}</Alert>
            )
          }

          <UpdatePasswordForm handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </section>
  );
}

const mapStateToProps = (state) => ({
  fetch: state.fetch,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (uid, payload) => updateUser(dispatch, uid, payload),
});

ProfileContainer.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
  fetch: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    successMsg: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
