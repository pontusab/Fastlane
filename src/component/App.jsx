import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  render() {
    return (
      <TransitionGroup transitionAppear={true} transitionName="app">
        <div className="app">
          {React.cloneElement(this.props.children)}
        </div>
      </TransitionGroup>
    );
  }
}
