import React from 'react';
import uber from '../util/uberHelper';

export default class Start extends React.Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) return window.location.replace('order');
  }

  render() {
    return (
      <div className="start">
        <div className="auth">
          <img className="splash" src="assets/img/splash.png" />
          <a className="logo" href={uber.generateRegisterUrl()}>
            <img src="assets/img/logo.svg" alt="Uber" />
          </a>

          <div className="auth-actions jawbone">
            <a href={uber.generateAuthUrl()} className="login">Sign in</a>
            <a href={uber.generateRegisterUrl()} className="register">Register</a>
          </div>
        </div>
      </div>
    );
  }
}
