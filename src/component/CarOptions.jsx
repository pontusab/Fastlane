import React from 'react';
import cx from 'classnames';

export default class CarOptions extends React.Component {
  state = {
    selected: 0,
  }

  handleClick(evt, index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <nav className="car-options">
        <ul className="cars">
          {
            this.props.products.map((product, index) => {
              const active = this.state.selected === index;

              return (
                <li key={product.product_id} className={cx({'is-active': active})} onClick={(evt) => ::this.handleClick(evt, index)}>
                  <button>{product.display_name}</button>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}
