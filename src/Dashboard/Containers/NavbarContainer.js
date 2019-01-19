import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import { removeUserDataAction } from '../../Auth/Actions/auth';

class NavbarContainer extends Component {
  gotoProfile = () => {
    const { history } = this.props;
    history.push('/profile');
  }

  gotoUpdatePassword = () => {
    const { history } = this.props;
    history.push('/updatePassword');
  }

  closeSession = () => {
    const { removeUserData } = this.props;
    removeUserData();
  }

  render () {
    return (
      <Navbar
        gotoProfile={this.gotoProfile}
        gotoUpdatePassword={this.gotoUpdatePassword}
        closeSession={this.closeSession}
      />
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  removeUserData: () => removeUserDataAction(dispatch),
});

NavbarContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  removeUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NavbarContainer);