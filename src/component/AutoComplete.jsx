import React from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Geosuggest from 'react-geosuggest';
import products from '../action/productsAction';

@connect()
export default class AutoComplete extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  };

  state = {
    expanded: false,
  }

  componentDidMount() {
    findDOMNode(this.refs.fromInput.refs.geosuggestInput).focus();
  }

  getStartLocation(data) {
    findDOMNode(this.refs.toInput.refs.geosuggestInput).focus();
    this.props.dispatch(products(data));
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
            onFocus={::this.handleClick}
          />
        </div>
      </form>
    );
  }
}
