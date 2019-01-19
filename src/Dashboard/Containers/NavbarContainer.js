import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nabvar from '../Components/Navbar';

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
    console.log('closeSession');
  }

  render () {
    return (
      <Nabvar
        gotoProfile={this.gotoProfile}
        gotoUpdatePassword={this.gotoUpdatePassword}
        closeSession={this.closeSession}
      />
    );
  }
};

NavbarContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NavbarContainer;