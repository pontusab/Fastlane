/* eslint-disable */
import React from 'react';

export default ({ children }) => (
  <div className="app">
    {React.cloneElement(children)}
  </div>
);
