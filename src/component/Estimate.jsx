import React from 'react';

export default class Estimate extends React.Component {
  render() {
    return (
      <div className="estimate">Approximately {this.props.currency} {this.props.priceRange}</div>
    );
  }
}
