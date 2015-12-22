import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
