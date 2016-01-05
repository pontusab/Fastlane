import React from 'react';
import cx from 'classnames';

export default class CountDown extends React.Component {
  static propTypes = {
    pulse: React.PropTypes.bool,
    time: React.PropTypes.number.isRequired,
  };

  render() {
    const classes = cx('border', {
      pulse: this.props.pulse,
    });

    return (
      <div className="countdown">
        <span className="time">{Math.round(this.props.time / 60)}</span>
        <span className="text">Min</span>

        <div className={classes}></div>
      </div>
    );
  }
}
