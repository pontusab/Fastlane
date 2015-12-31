import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import authenticate from '../action/authenticate';

function select(state) {
  return {
    user: state.user,
  };
}

@connect(select)
export default class Auth extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    setTimeout(() => {
      const { code } = qs.parse(window.location.search);
      if (code) this.props.dispatch(authenticate(code));
    }, 5000);
  }

  componentWillReceiveProps({ user }) {
    if (user.error) return;

    localStorage.setItem('user', JSON.stringify(user));

    return window.location.replace('search');
  }

  render() {
    return (
      <div className="auth">
        <div className="loading-spinner"></div>
      </div>
    );
  }
}
