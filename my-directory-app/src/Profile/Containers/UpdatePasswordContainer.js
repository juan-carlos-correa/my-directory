import React from 'react';
import {
  Row,
  Col,
  Spinner,
  Alert,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePassword } from '../Actions/user';
import UpdatePasswordFormWithControlled from '../Components/UpdatePasswordFormWithControlled';
import ProfileBreadCrumbs from '../Components/ProfileBreadCrumbs';

const ProfileContainer = ({ user, updatePassword, fetch }) => {
  const { email } = user;
  const { isLoading, successMsg, errorMsg } = fetch;

  const handleSubmit = (oldPassword, newPassword) => {
    updatePassword({ email, password: oldPassword }, newPassword);
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

          <UpdatePasswordFormWithControlled
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </section>
  );
}

const mapStateToProps = (state) => ({
  fetch: state.fetch,
});

const mapDispatchToProps = (dispatch) => ({
  updatePassword: (credentials, newPassword) => updatePassword(dispatch, credentials, newPassword),
});

ProfileContainer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  updatePassword: PropTypes.func.isRequired,
  fetch: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    successMsg: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
