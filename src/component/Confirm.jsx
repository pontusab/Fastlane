import React from 'react';

// {
//    "status": "accepted",
//    "driver": {
//       "phone_number": "(555)555-5555",
//       "rating": 5,
//       "picture_url": "https:\/\/d1w2poirtb3as9.cloudfront.net\/img.jpeg",
//       "name": "Bob"
//    },
//    "eta": 4,
//    "location": {
//       "latitude": 37.776033,
//       "longitude": -122.418143,
//       "bearing": 33
//    },
//    "vehicle": {
//       "make": "Bugatti",
//       "model": "Veyron",
//       "license_plate": "I<3Uber",
//       "picture_url": "https:\/\/d1w2poirtb3as9.cloudfront.net\/car.jpeg",
//    },
//    "surge_multiplier":  1.0,
//    "request_id": "b2205127-a334-4df4-b1ba-fc9f28f56c96"
// }

export default class Confirm extends React.Component {
  render() {
    return (
      <div className="route">
        <div className="information">
          <div className="driver">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg" />

            <div className="text">
              <span className="name">Pontus</span>
              <span className="rating">
                <span className="rating-text">5.0</span>
                <img src="assets/img/star.svg" />
              </span>
            </div>
          </div>

          <div className="car">
            <img src="http://tinyurl.com/pnbxrck" />

            <div className="text">
              <span className="model">Dolorean</span>
              <span className="number">XYZ582</span>
            </div>
          </div>

          <div className="map">
            <img src="assets/img/map.png" />
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
