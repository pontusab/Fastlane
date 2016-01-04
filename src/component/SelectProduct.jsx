import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import selectedAction from '../action/selectedAction';

@connect()
export default class SelectProduct extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
  };

  handleClick(index) {
    this.props.dispatch(selectedAction(index));
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.data.map((product, index) => {
              return (
                <li key={product.product_id}
                  className={cx({ 'is-active': this.props.products.selected === index })}
                  onClick={() => ::this.handleClick(index)}
                >
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
