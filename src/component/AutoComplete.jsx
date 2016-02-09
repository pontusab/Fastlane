/* eslint no-undef: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Geosuggest from 'react-geosuggest';
import productAction from '../action/productAction';
import priceAction from '../action/priceAction';

@connect()
export default class AutoComplete extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  };

  state = {
    start: false,
    end: false,
  };

  componentDidMount() {
    // Geosuggest has no ref, need to query classnames
    findDOMNode(document.querySelectorAll('.geosuggest__input')[0]).focus();
  }

  componentWillUpdate(nextProps, { start, end }) {
    if (start && end) this.props.dispatch(priceAction(start, end));
  }

  setStartLocation(location) {
    this.setState({ start: location });
    this.props.dispatch(productAction(location));

    // Geosuggest has no ref, need to query classnames
    findDOMNode(document.querySelectorAll('.geosuggest__input')[1]).focus();
  }

  setEndLocation(location) {
    this.setState({ end: location });
  }

  render() {
    const classes = cx('options-form', {
      'is-expanded': this.state.start,
    });

    const { location } = this.state.start;

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
            disabled={!this.state.start}
            onSuggestSelect={::this.setEndLocation}
            location={new google.maps.LatLng(location)}
            radius="20"
          />
        </div>
      </div>
    );
  }
}
