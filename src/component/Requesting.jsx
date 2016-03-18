import React from 'react';
import cancelRequestAction from '../action/cancelRequestAction';
import getRequestAction from '../action/getRequestAction';
import CountDown from './CountDown.jsx';

export default class Requesting extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.interval = setInterval(::this.poll, 5000);
  }

  componentWillReceiveProps(props) {
    switch (props.order.status) {
    case 'no_drivers_available':
    case 'driver_canceled':
    case 'rider_canceled':
      window.location.replace('/start');
      break;
    case 'accepted':
      window.location.replace('/enroute');
      break;
    default:
      // Do Nothing
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  poll() {
    this.props.dispatch(getRequestAction(this.props.order.request_id));
  }

  cancelRequest() {
    this.props.dispatch(cancelRequestAction(this.props.order.request_id));
  }

  render() {
    return (
      <div className="requesting">
        <div className="progress">
          <span>Requesting</span>
          <div className="loading"></div>
        </div>

        <CountDown time={this.props.order.product.estimate} />

        <div className="jawbone">
          <button
            className="regular-button"
            onClick={::this.cancelRequest}
          >
              Cancel request
          </button>
        </div>
      </div>
    );
  }
}
