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
    const { setUserData, setSigninErrorMsg, setIsSigninError, history } = this.props;
    const firebaseAuth = new FirebaseAuth();

    firebaseAuth.getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        if (user.emailVerified) {
          const { uid } = user;
          await setUserData(uid);
          history.push('/main');
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

  renderChildrenWithProps = (children, user) => (
    React.Children.map(children, child =>
      React.cloneElement(child, { user })
    )
  )

  render () {
    const { isLoading } = this.state;
    const { children, user } = this.props;

    if (isLoading) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        { this.renderChildrenWithProps(children, user) }
      </div>
    );
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
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    job: PropTypes.string,
    subsidiary: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthGuard));
