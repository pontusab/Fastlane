import React from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import Geosuggest from 'react-geosuggest';

export default class AutoComplete extends React.Component {
  static defaultProps = {
    from: 'Hornsgatan 65A, Stockholm',
    fromPlaceholder: 'Enter pickup location',
    to: 'Circus, Stockholm',
    toPlaceholder: 'Enter destination',
  }

  state = {
    expanded: false,
    from: null,
    to: null,
  }

  componentDidMount() {
    findDOMNode(this.refs.fromInput.refs.geosuggestInput).focus();
  }

  handleClick() {
    this.setState({ expanded: true });
  }

  getFromData(data) {
    this.setState({ from: data });
    findDOMNode(this.refs.toInput.refs.geosuggestInput).focus();
  }

  getToData(data) {
    this.setState({ to: data });
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
            placeholder={this.props.fromPlaceholder}
            onSuggestSelect={::this.getFromData} />
        </div>

        <div className="row to">
          <Geosuggest
            ref="toInput"
            autoActivateFirstSuggest="true"
            placeholder={this.props.toPlaceholder}
            onSuggestSelect={::this.getToData}
            onFocus={::this.handleClick} />
        </div>
      </form>
    );
  }
}
