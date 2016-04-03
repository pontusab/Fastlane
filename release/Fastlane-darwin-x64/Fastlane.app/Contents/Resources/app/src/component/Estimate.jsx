/* eslint-disable */
import React from 'react';

export default ({ estimate }) => (
  <div className="estimate">
    { estimate && `Approximately ${estimate}` }
  </div>
);
