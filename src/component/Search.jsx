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
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(products());
  }

  render() {
    return (
      <div className="search">
        {
          this.props.products.length ?
            <div>
              <CarOptions products={this.props.products} />
              <AutoComplete />
              <CountDown minutes={1} pulse />
              {/* <Estimate priceRange="4-5" currency="USD" /> */}

              <Button path="/order" text="Request" />
            </div>
          :
          <Loading />
        }
      </div>
    );
  }
}
