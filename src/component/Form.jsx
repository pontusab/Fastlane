import React from 'react';
import { connect } from 'react-redux';
import SelectProduct from './SelectProduct.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';

function select(state) {
  return {
    order: state.order,
  };
}

@connect(select)
export default class Form extends React.Component {
  static propTypes = {
    products: React.PropTypes.object.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    const products = this.props.products.cars;
    const selectedId = this.props.products.selected;
    const selectedProduct = products[selectedId];
    const estimates = this.props.products.prices[selectedId];

    return (
      <form className="order" autoComplete="off" onSubmit={::this.handleSubmit}>
        <SelectProduct products={products} selected={selectedId} />
        <AutoComplete />
        <CountDown time={selectedProduct.estimate} pulse />
        { estimates && <Estimate estimate={estimates.estimate} /> }

        <div className="jawbone">
          <button className="regular-button">
            {`Request ${selectedProduct.display_name}`}
          </button>
        </div>
      </form>
    );
  }
}
