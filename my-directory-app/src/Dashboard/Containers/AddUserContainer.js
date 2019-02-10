import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserFormWithControlled from '../Components/UserFormWithControlled';
import FetchStatus from '../../Utils/Components/FetchStatus';
import { inviteUser } from '../Actions/invite';

const AddUserContainer = ({ fetch, handleInvitUser }) => {
  const handleSubmit = (values) => {
    handleInvitUser(values);
  }

  return (
    <section>
      <Row className="justify-content-center">
        <Col xs="12" sm="8" md="6">
          <h2 className="text-center">Invitar usuario</h2>
          <FetchStatus {...fetch} />
          <UserFormWithControlled handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </section>
  );
}

const mapStateToProps = (state) => ({
  fetch: state.fetch,
});

const mapDispatchToProps = (dispatch) => ({
  handleInvitUser: inviteUser(dispatch),
});

AddUserContainer.propTypes = {
  fetch: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    successMsg: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired,
  }).isRequired,
  handleInvitUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
