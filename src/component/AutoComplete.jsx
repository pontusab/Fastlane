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
    expanded: false,
    start: false,
    end: false,
  }

  componentDidMount() {
    findDOMNode(this.refs.fromInput.refs.geosuggestInput).focus();
  }

  componentWillUpdate(nextProps, { start, end }) {
    if (start && end) this.props.dispatch(priceAction(start, end));
  }

  getStartLocation(location) {
    findDOMNode(this.refs.toInput.refs.geosuggestInput).focus();
    this.setState({ start: location });
    this.props.dispatch(productAction(location));
  }

  getEndLocation(location) {
    this.setState({ end: location });
  }

  handleClick() {
    this.setState({ expanded: true });
  }

  render() {
    const classes = cx('options-form', {
      'is-expanded': this.state.expanded,
    });

    return (
      <form className={classes} autoComplete="off">
        <div className="row from">
          <Geosuggest
            ref="fromInput"
            placeholder="Enter pickup location"
            onSuggestSelect={::this.getStartLocation}
          />
        </div>

        <div className="row to">
          <Geosuggest
            ref="toInput"
            placeholder="Enter destination"
            onSuggestSelect={::this.getEndLocation}
            onFocus={::this.handleClick}
          />
        </div>
      </form>
    );
  }
}
