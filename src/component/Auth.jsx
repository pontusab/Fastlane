import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import authenticate from '../action/authenticateAction';
import Loading from './Loading.jsx';

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
    const { code } = qs.parse(window.location.search);
    if (code) this.props.dispatch(authenticate(code));
  }

  componentWillReceiveProps({ user }) {
    if (user.error) return;

    localStorage.setItem('user', JSON.stringify(user));

    setTimeout(() => window.location.replace('/'), 2000);
  }

  render() {
    return (
      <div className="auth">
        <Loading />
      </div>
    );
  }
}
