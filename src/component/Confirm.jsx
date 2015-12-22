import React from 'react';

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
