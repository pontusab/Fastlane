import React from 'react';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';

export default class Order extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.replace('#confirm');
    }, 5000);
  }
  render() {
    return (
      <div className="order">
        <div className="requesting">
          <span>Requesting</span>
          <div className="loading"></div>
        </div>

        <CountDown minutes={1} />

        <Estimate priceRange="4-5" currency="USD" />

        <Button path="/search" text="Cancel" />
      </div>
    );
  }
}
