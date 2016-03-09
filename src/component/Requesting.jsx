import React from 'react';
import cancelRequestAction from '../action/cancelRequestAction';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';

export default class Requesting extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.interval = setInterval(::this.poll, 1000);
  }

  poll() {
    console.log('poll');
  }

  render() {
    console.log(this.props);
    return (
      <div className="requesting">
        <div className="progress">
          <span>Requesting</span>
          <div className="loading"></div>
        </div>

        <CountDown time={this.props.order.product.estimate} />
        { /* <Estimate estimate="137-170 kr" /> */ }

        <div className="jawbone">
          <button
            className="regular-button"
            onClick={() => this.props.dispatch(cancelRequestAction(this.props.order.request_id))}
          >
              Cancel request
          </button>
        </div>
      </div>
    );
  }
}
