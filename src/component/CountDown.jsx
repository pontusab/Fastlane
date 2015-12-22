import React from 'react';
import cx from 'classnames';

export default class CountDown extends React.Component {
  render() {
    const classes = cx('border', {
     'pulse': this.props.pulse,
    });

    return (
      <div className="countdown">
        <span className="time">{this.props.minutes}</span>
        <span className="text">Min</span>

        <div className={classes}></div>
      </div>
    );
  }
}
