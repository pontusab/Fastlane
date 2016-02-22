import React from 'react';
import { connect } from 'react-redux';
import orderAction from '../action/orderAction';

@connect()
export default class SelectProduct extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.array.isRequired,
    order: React.PropTypes.number.isRequired,
  };

  handleClick(product) {
    this.props.dispatch(orderAction({ product }));
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.map((product, index) => {
              console.log(this.props);
              const selected = this.props.selected === index || false;
              const selectedProduct = this.props.products[selected];

              return (
                <li key={product.product_id}>
                  <input type="radio"
                    id={product.display_name}
                    defaultChecked={selected}
                    name="product"
                  />

                <label
                  htmlFor={product.display_name}
                  onClick={() => :: this.handleClick(selectedProduct)}
                >
                    {product.display_name}
                  </label>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}
