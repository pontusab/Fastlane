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
    const { order } = this.props;

    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.map((product) => {
              const selected = order.product.product_id === product.product_id || 0;

              return (
                <li key={product.product_id}>
                  <input type="radio"
                    id={product.display_name}
                    defaultChecked={selected}
                    name="product"
                  />

                <label
                  htmlFor={product.display_name}
                  onClick={() => :: this.handleClick(selected)}
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
