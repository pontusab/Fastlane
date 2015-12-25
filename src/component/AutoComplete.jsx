import React from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Geosuggest from 'react-geosuggest';

export default class AutoComplete extends React.Component {
  state = {
    expanded: false,
    from: 'Hornsgatan 65A, Stockholm',
    to: null,
  }

  componentDidMount() {
    findDOMNode(this.refs.fromInput.refs.geosuggestInput).focus();
  }

  getToData(data) {
    this.setState({ to: data });
  }

  getFromData(data) {
    this.setState({ from: data });
    findDOMNode(this.refs.toInput.refs.geosuggestInput).focus();
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
            autoActivateFirstSuggest="true"
            placeholder="Enter pickup location"
            onSuggestSelect={::this.getFromData}
          />
        </div>

        <div className="row to">
          <Geosuggest
            ref="toInput"
            autoActivateFirstSuggest="true"
            placeholder="Enter destination"
            onSuggestSelect={::this.getToData}
            onFocus={::this.handleClick}
          />
        </div>
      </form>
    );
  }
}
