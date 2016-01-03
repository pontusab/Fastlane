import React from 'react';
import { connect } from 'react-redux';
import CarOptions from './CarOptions.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';
import Loading from './Loading.jsx';
import products from '../action/products';

function select(state) {
  return {
    products: state.products,
    selected: state.selected,
    prices: state.prices,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.array.isRequired,
    prices: React.PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(products());
  }

  render() {
    const product = this.props.products[this.props.selected];

    return (
      <div className="search">
        {
          this.props.products.length ?
            <div>
              <CarOptions products={this.props.products} selected={this.props.selected} />
              <AutoComplete />
              <CountDown time={product.estimate} pulse />

              <Button path="/order" text="Request" />
            </div>
          :
          <Loading />
        }
      </div>
    );
  }
}
