import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import TransitionGroup from 'react-addons-css-transition-group';
import authenticate from '../action/authenticate';

@connect()
export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    const query = qs.parse(window.location.search);

    if (query) this.props.dispatch(authenticate);
  }

  render() {
    return (
      <TransitionGroup
        transitionAppear
        transitionName="app"
        transitionAppearTimeout={0}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >

        <div className="app">
          {React.cloneElement(this.props.children)}
        </div>

      </TransitionGroup>
    );
  }
}
