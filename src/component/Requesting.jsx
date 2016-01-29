import React from 'react';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';

export default class Requesting extends React.Component {
  render() {
    return (
      <div className="requesting">
        <div className="progress">
          <span>Requesting</span>
          <div className="loading"></div>
        </div>

        <CountDown time={255} />
        <Estimate estimate="137-170 kr" />
      </div>
    );
  }
}
