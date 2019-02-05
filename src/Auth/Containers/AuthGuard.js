import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class AuthGuard extends Component {
  renderChildrenWithProps = (children, user) => (
    React.Children.map(children, child =>
      React.cloneElement(child, { user })
    )
  )

  render () {
    const { children, user, isLoading } = this.props;

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
  isLoading: state.fetch.isLoading,
});

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    job: PropTypes.string,
    subsidiary: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps)(AuthGuard));
