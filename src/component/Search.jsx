import React from 'react';
import { connect } from 'react-redux';
import SelectProduct from './SelectProduct.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';
import Loading from './Loading.jsx';
import products from '../action/productsAction';

function select(state) {
  return {
    products: state.products,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(products());
  }

  render() {
    const products = this.props.products.data;
    const selectedId = this.props.products.selected;
    const selectedProduct = products[selectedId];

    return (
      <div className="search">
        {
          products.length ?
            <div>
              <SelectProduct products={products} selected={selectedId} />
              <AutoComplete />
              <CountDown time={selectedProduct.estimate} pulse />
              <Estimate priceRange="4-6" currency="USD" />

              <Button path="/order" text={`Request ${selectedProduct.display_name}`} />
            </div>
          :
          <Loading />
        }
      </div>
    );
  }
}
