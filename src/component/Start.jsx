import React from 'react';
import uber from '../util/uberHelper';

export default class Start extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) return window.location.replace('order');
  }

  render() {
    return (
        <div className="auth">
          <div className="splash"></div>
          <a className="logo" href={uber.generateRegisterUrl()}>
            <img src="public/img/logo.svg" alt="Uber" />
          </a>

          <div className="auth-actions jawbone">
            <a href={uber.generateAuthUrl()} className="login">Sign in</a>
            <a href={uber.generateRegisterUrl()} className="register">Register</a>
          </div>
        </div>
    );
  }
}
