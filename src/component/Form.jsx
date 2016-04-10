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
    if (this.props.order.start) this.props.dispatch(requestAction(this.props.order));
  }

  render() {
    let selectedProduct = false;
    let selectedPrice = false;
    const { products, order } = this.props;

    if (products.cars && products.cars[0]) {
      selectedProduct = _.find(
        products.cars,
        ['product_id', order.product && order.product.product_id || products.cars[0].product_id]
      );

      selectedPrice = _.find(
        products.prices,
        ['product_id', order.product && order.product.product_id || products.cars[0].product_id]
      );
    }

    return (
      <form className="order" autoComplete="off" onSubmit={::this.handleSubmit}>
        <SelectProduct products={products.cars} />
        <AutoComplete />
        <CountDown time={selectedProduct.estimate || 0} pulse />
        { selectedPrice && <Estimate estimate={selectedPrice.estimate} /> }

        <div className="jawbone">
          <button className="regular-button">
             {`Request ${selectedProduct.display_name || ''}`}
          </button>
        </div>
      </form>
    );
  }
}
