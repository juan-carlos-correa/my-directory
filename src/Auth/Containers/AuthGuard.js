import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FirebaseAuth from '../../Services/Firebase/Auth/FirebaseAuth';
import { setUserData } from '../Actions/auth';
import { setSigninErrorMessageAction, setIsSigninErrorAction } from '../Actions/signin';

class AuthGuard extends Component {
  constructor (props) {
    super(props);

    this.state = { isLoading: true };
  }

  componentDidMount () {
    const { setUserData, setSigninErrorMsg, setIsSigninError } = this.props;
    const firebaseAuth = new FirebaseAuth();
    firebaseAuth.getAuth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          const { uid } = user;
          setUserData(uid);
        } else {
          const msg = 'Necesitas validar tu correo. Ha sido enviado un nuevo email de verificación';
          setSigninErrorMsg(msg);
          setIsSigninError(true);
          firebaseAuth.sendEmailVerificationToCurrentUser();
        }
      }

      this.setState({ isLoading: false });
    });
  }

  render () {
    const { isLoading } = this.state;
    const { children } = this.props;

    if (isLoading) {
      return <div>Loading...</div>
    }

    return <div>{ children }</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUserData: userUid => setUserData(dispatch, userUid),
  setSigninErrorMsg: msg => dispatch(setSigninErrorMessageAction(msg)),
  setIsSigninError: value => dispatch(setIsSigninErrorAction(value)),
});

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
  setUserData: PropTypes.func.isRequired,
  setSigninErrorMsg: PropTypes.func.isRequired,
  setIsSigninError: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthGuard));
