/* eslint no-undef: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Geosuggest from 'react-geosuggest';
import productAction from '../action/productAction';
import orderAction from '../action/orderAction';

function select(state) {
  return {
    order: state.order,
  };
}

@connect(select)
export default class AutoComplete extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    findDOMNode(document.querySelectorAll('.geosuggest__input')[0]).focus();
  }

  setStartLocation(location) {
    this.props.dispatch(orderAction({ start: location }));
    this.props.dispatch(productAction(location));

    findDOMNode(document.querySelectorAll('.geosuggest__input')[1]).focus();
  }

  setEndLocation(location) {
    this.props.dispatch(orderAction({
      end: location,
    }));
  }

  render() {
    const classes = cx('options-form', {
      'is-expanded': this.props.order.start,
    });

    return (
      <div className={classes}>
        <div className="row from">
          <Geosuggest
            required
            placeholder="Enter pickup location"
            autoActivateFirstSuggest="true"
            onSuggestSelect={::this.setStartLocation}
          />
        </div>

        <div className="row to">
          <Geosuggest
            placeholder="Enter destination"
            autoActivateFirstSuggest="true"
            onSuggestSelect={::this.setEndLocation}
          />
        </div>
      </div>
    );
  }
}
