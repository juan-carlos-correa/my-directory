import React, { Component } from 'react';
import { connect } from 'react-redux';
import FirebaseAuth from '../../Services/Firebase/Auth/FirebaseAuth';

class AuthGuard extends Component {
  constructor (props) {
    super(props);

    this.state = { isLoading: true };
  }

  componentDidMount () {
    const firebaseAuth = new FirebaseAuth();
    firebaseAuth.getAuth().onAuthStateChanged((user) => {
      console.log('current user', user);
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

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
