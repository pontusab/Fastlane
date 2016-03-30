/* eslint-disable */
import React from 'react';
import cx from 'classnames';

export default ({ time, pulse }) => (
  <div className="countdown">
    <span className="time">{Math.round(time / 60)}</span>
    <span className="text">Min</span>
    <div className={cx('border', { pulse })}></div>
  </div>
);
