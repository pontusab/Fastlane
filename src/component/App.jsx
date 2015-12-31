import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import Analytics from '../util/analytics';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  componentDidMount() {
    const { pathname } = window.location;
    Analytics.track('PAGE_VIEW', {target: pathname });
  }

  render() {
    return (
      <TransitionGroup
        transitionAppear
        transitionName="app"
        transitionAppearTimeout={0}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >

        <div className="app">
          {React.cloneElement(this.props.children)}
        </div>

      </TransitionGroup>
    );
  }
}
