import React from 'react';
import { connect } from 'react-redux';
import getRequestAction from '../action/getRequestAction';
import getEnRouteMap from '../action/getEnRouteMap';

function select(state) {
  return {
    ridemap: state.ridemap,
  };
}

export default class Confirm extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    order: React.PropTypes.object.isRequired,
    ridemap: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.interval = setInterval(::this.poll, 5000);
  }

  componentDidMount() {
    this.props.dispatch(getEnRouteMap(this.props.order.request_id));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  poll() {
    this.props.dispatch(getRequestAction(this.props.order.request_id));
  }

  render() {
    const { order } = this.props;
    console.log(order.ridemap.href);
    return (
      <div className="route">
        <div className="information">
          <div className="driver">
            <img src={order.driver.picture_url} />

            <div className="text">
              <span className="name">{order.driver.name}</span>
              <span className="rating">
                <span className="rating-text">{order.driver.rating}</span>
                <img src="assets/img/star.svg" />
              </span>
            </div>
          </div>

          <div className="car">
            <img src={order.vehicle.picture_url} />

            <div className="text">
              <span className="model">{`${order.vehicle.make} ${order.vehicle.model}`}</span>
              <span className="number">{order.vehicle.license_plate}</span>
            </div>
          </div>

          <div className="map">
            <iframe className="map-frame" src={order.ridemap.href} />
          </div>

          <div className="arriving">
            <span className="time">{order.eta}</span>
            <span className="text">Min</span>
            <div className="border"></div>
          </div>
        </div>
      </div>
    );
  }
}
