import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import selected from '../action/selected';

@connect()
export default class CarOptions extends React.Component {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
  };

  handleClick(index) {
    this.props.dispatch(selected(index));
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.map((product, index) => {
              const active = this.props.selected === index;

              return (
                <li key={product.product_id} className={cx({ 'is-active': active })} onClick={() => ::this.handleClick(index)}>
                  <button>{product.display_name}</button>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}
