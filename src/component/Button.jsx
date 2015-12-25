import React from 'react';
import { Link } from 'react-router';

export default class Button extends React.Component {
  static propTypes = {
    path: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="jawbone">
        <Link to={this.props.path} className="regular-button">{this.props.text}</Link>
      </div>
    );
  }
}
