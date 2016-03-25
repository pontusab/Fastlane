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
    if (!user) setTimeout(() => window.location.replace('/start'), 3000);

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
      return <Form {...this.props} />;
    case 'processing':
      return <Requesting {...this.props} />;
    case 'accepted':
      return <EnRoute {...this.props} />;
      return;
    default:
      return <Form {...this.props} />;
    }
  }

  fetch() {
    const location = this.props.order.start;
    this.props.dispatch(productAction(location));
  }

  render() {
    const products = this.props.products.cars;
    return (
      <div className="order">
        {
          products.length ?
            this.getStateComponent()
          :
          <Loading />
        }
      </div>
    );
  }
}
