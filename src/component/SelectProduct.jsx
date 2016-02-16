import React from 'react';
import { connect } from 'react-redux';
import selectedAction from '../action/selectedAction';

@connect()
export default class SelectProduct extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.array.isRequired,
    selected: React.PropTypes.number.isRequired,
  };

  handleClick(index) {
    this.props.dispatch(selectedAction(index));
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.map((product, index) => {
              const selected = this.props.selected === index || false;

              return (
                <li key={product.product_id}>
                  <input type="radio"
                    id={product.display_name}
                    defaultChecked={selected}
                    name="product"
                  />

                <label htmlFor={product.display_name} onClick={() => ::this.handleClick(index)}>
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
