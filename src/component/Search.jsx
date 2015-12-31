import React from 'react';
import CarOptions from './CarOptions.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';
import Loading from './Loading.jsx';

// Connect to store
// Get location
// Load products
// Load estimates
export default class Search extends React.Component {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
  };

  static defaultProps = {
    products: [
      {
        display_name: 'uberX',
        product_id: 'a1111c8c-c720-46c3-8534-2fcdd730040d',
      },
      {
        display_name: 'uberXL',
        product_id: '821415d8-3bd5-4e27-9604-194e4359a449',
      },
      {
        display_name: 'UberBLACK',
        product_id: 'd4abaae7-f4d6-4152-91cc-77523e8165a4',
      },
      {
        display_name: 'UberSUV',
        product_id: '8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0',
      },
      {
        display_name: 'uberTAXI',
        product_id: '3ab64887-4842-4c8e-9780-ccecd3a0391d',
      },
    ],
  };

  render() {
    return (
      <div className="search">
        {
          this.props.products ?
            <div>
              <CarOptions products={this.props.products} />
              <AutoComplete />
              <CountDown minutes={1} pulse />
              <Estimate priceRange="4-5" currency="USD" />

              <Button path="/order" text="Request" />
            </div>
          :
            <Loading />
        }
      </div>
    );
  }
}
