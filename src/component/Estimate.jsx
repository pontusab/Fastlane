import React from 'react';

export default class Estimate extends React.Component {
  static propTypes = {
    estimate: React.PropTypes.string,
  };

  render() {
    return (
      <div className="estimate">
        { this.props.estimate && `Approximately ${this.props.estimate}` }
      </div>
    );
  }
}
