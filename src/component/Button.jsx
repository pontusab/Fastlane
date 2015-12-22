import React from 'react';
import { Link } from 'react-router';

export default class Button extends React.Component {
  render() {
    return (
      <div className="jawbone">
        <Link to={this.props.path} className="regular-button">{this.props.text}</Link>
      </div>
    );
  }
}
