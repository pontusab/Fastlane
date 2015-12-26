import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';

// Connect to store
// Load user
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

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
