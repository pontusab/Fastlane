import React from 'react';

export default class Estimate extends React.Component {
  static propTypes = {
    currency: React.PropTypes.string.isRequired,
    priceRange: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="estimate">Approximately {this.props.currency} {this.props.priceRange}</div>
    );
  }
}
