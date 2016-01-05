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
  }

  componentDidMount() {
    findDOMNode(this.refs.fromInput.refs.geosuggestInput).focus();
  }

  componentWillUpdate(nextProps, { start, end }) {
    if (start && end) this.props.dispatch(priceAction(start, end));
  }

  setStartLocation(location) {
    this.setState({ start: location });
    this.props.dispatch(productAction(location));
    findDOMNode(this.refs.toInput.refs.geosuggestInput).focus();
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
      <form className={classes} autoComplete="off">
        <div className="row from">
          <Geosuggest
            ref="fromInput"
            placeholder="Enter pickup location"
            autoActivateFirstSuggest="true"
            onSuggestSelect={::this.setStartLocation} />
        </div>

        <div className="row to">
          <Geosuggest
            ref="toInput"
            placeholder="Enter destination"
            autoActivateFirstSuggest="true"
            disabled={!this.state.start}
            onSuggestSelect={::this.setEndLocation}
            location={new google.maps.LatLng(location)}
            radius="20" />
        </div>
      </form>
    );
  }
}
