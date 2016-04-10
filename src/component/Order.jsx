import React from 'react';
import { connect } from 'react-redux';
import Form from './Form.jsx';
import Loading from './Loading.jsx';
import Requesting from './Requesting.jsx';
import EnRoute from './EnRoute.jsx';
import productAction from '../action/productAction';

function select(state) {
  return {
    products: state.products,
    order: state.order,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    // Move to state instead of localStorage
    const user = localStorage.getItem('user');
    if (!user) window.location.replace('/start');

    ::this.fetch();
  }

  getStateComponent() {
    // Will refactor to only have one container component
    // instead of using react router because the app is not that complex
    switch (this.props.order.status) {
    case 'no_drivers_available':
    case 'driver_canceled':
    case 'rider_canceled':
    case 'completed':
    case 'arriving':
      return window.location.replace('/order');
    case 'processing':
      return <Requesting {...this.props} />;
    case 'accepted':
      return <EnRoute {...this.props} />;
    default:
      return <Form {...this.props} />;
    }
  }

  fetch() {
    this.props.dispatch(productAction(this.props.order.start));
  }

  render() {
    return (
      <div className="order">
        {
          this.props.products.loading ?
            <Loading />
          :
          this.getStateComponent()
        }
      </div>
    );
  }
}
