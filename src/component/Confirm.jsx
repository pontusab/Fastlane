import React from 'react';

// Fixture
const order = {
  status: 'accepted',
  driver: {
    phone_number: '(555)555-5555',
    rating: 5,
    picture_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
    name: 'Bob',
  },
  eta: 4,
  location: {
    latitude: 37.776033,
    longitude: -122.418143,
    bearing: 33,
  },
  vehicle: {
    make: 'Bugatti',
    model: 'Veyron',
    license_plate: 'I<3Uber',
    picture_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_(1),_5._April_2012,_D%C3%BCsseldorf.jpg',
  },
  surge_multiplier: 1.0,
  request_id: 'b2205127-a334-4df4-b1ba-fc9f28f56c96',
};

export default class Confirm extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.poll, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  poll() {
    console.log('poll');
  }

  render() {
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
            <iframe className="map-frame" src="https://sandbox-api.uber.com/v1/sandbox/map" />
          </div>

          <div className="arriving">
            <span className="time">1</span>
            <span className="text">Min</span>
            <div className="border"></div>
          </div>
        </div>
      </div>
    );
  }
}
