import React from 'react';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';

// {
//    "request_id": "852b8fdd-4369-4659-9628-e122662ad257",
//    "status": "processing",
//    "vehicle": null,
//    "driver": null,
//    "location": null,
//    "eta": 5,
//    "surge_multiplier": null
// }

export default class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <div className="requesting">
          <span>Requesting</span>
          <div className="loading"></div>
        </div>

        <CountDown time={255} />
        <Estimate estimate="4-5 USD" />

        <Button path="/search" text="Cancel" />
      </div>
    );
  }
}
