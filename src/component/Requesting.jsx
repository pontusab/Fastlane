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
    this.interval = setInterval(::this.poll, 4000);
    this.state = { title: 'Requesting' };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  poll() {
    this.props.dispatch(getRequestAction(this.props.order.request_id));
  }

  cancelRequest() {
    this.setState({ title: 'Canceling request' });
    this.props.dispatch(cancelRequestAction(this.props.order.request_id));
  }

  render() {
    return (
      <div className="requesting">
        <div className="progress">
          <span>{this.state.title}</span>
          <div className="loading"></div>
        </div>

        <CountDown time={this.props.order.product.estimate} />

        <div className="jawbone">
          <button
            className="regular-button cancel"
            onClick={::this.cancelRequest}
          >
              Cancel request
          </button>
        </div>
      </div>
    );
  }
}
