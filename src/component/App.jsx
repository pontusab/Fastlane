import React from 'react';
import Analytics from '../util/analytics';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  componentDidMount() {
    Analytics.track('PAGEVIEW', { target: window.location.pathname });
  }

  render() {
    return (
      <div className="app">
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
