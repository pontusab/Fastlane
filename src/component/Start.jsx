import React from 'react';
import uber from '../util/uberHelper';

export default class Start extends React.Component {
  state = {
    playVideo: !localStorage.getItem('playVideo'),
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) return window.location.replace('order');
  }

  onEnded() {
    localStorage.setItem('playVideo', false);
    this.setState({ playVideo: false });
  }

  render() {
    return (
      <div className="start">
        {
          this.state.playVideo ?
            <video controls="" autoPlay name="media" onEnded={::this.onEnded}>
              <source src="assets/video/video.webm" type="video/webm" />
            </video>
          :
            <div className="auth">
              <img className="splash" src="assets/img/splash.png" />
              <a className="logo" href={uber.generateRegisterUrl()}>
                <img src="assets/img/logo.svg" alt="Uber" />
              </a>

              <div className="auth-actions jawbone">
                <a
                  href={uber.generateAuthUrl()}
                  className="login"
                >
                  Sign in
                </a>

                <a
                  href={uber.generateRegisterUrl()}
                  className="register"
                >
                  Register
                </a>
              </div>
            </div>
        }
      </div>
    );
  }
}
