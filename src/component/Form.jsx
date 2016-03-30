import React from 'react';
import _ from 'lodash';
import requestAction from '../action/requestAction';
import SelectProduct from './SelectProduct.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';

export default class Form extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.order) this.props.dispatch(requestAction(this.props.order));
  }

  render() {
    const order = this.props.order;
    const products = this.props.products.cars;
    const selectedProduct = _.find(
      products,
      ['product_id', order.product.product_id || products[0].product_id]
    );

    const prices = this.props.products.prices;
    const selectedPrice = _.find(
      prices,
      ['product_id', order.product.product_id || products[0].product_id]
    );

    return (
      <form className="order" autoComplete="off" onSubmit={::this.handleSubmit}>
        <SelectProduct products={products} />
        <AutoComplete />
        <CountDown time={selectedProduct.estimate} pulse />
        { selectedPrice && <Estimate estimate={selectedPrice.estimate} /> }

        <div className="jawbone">
          <button className="regular-button">
            Request
          </button>
        </div>
      </form>
    );
  }
}
