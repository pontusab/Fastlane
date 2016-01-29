import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="app">
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}
