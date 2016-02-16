import React from 'react';
import { connect } from 'react-redux';
import Form from './Form.jsx';
import Loading from './Loading.jsx';
import productAction from '../action/productAction';
import priceAction from '../action/priceAction';

function select(state) {
  return {
    products: state.products,
    order: state.order,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
    order: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    ::this.fetch();
  }

  componentWillUpdate(props) {
    const { order: { start, end } } = props;
    if (start && end) this.props.dispatch(priceAction(start, end));
  }

  onMouseOver() {
    this.interval = setInterval(::this.fetch, 5000);
  }

  onMouseOut() {
    clearInterval(this.interval);
  }

  fetch() {
    this.props.dispatch(productAction(this.props.order.start));
  }

  render() {
    console.log(this.props);
    const products = this.props.products.cars;

    return (
      <div
        className="order"
        onMouseOut={::this.onMouseOut}
        onMouseOver={::this.onMouseOver}
      >
        {
          products.length ?
            <Form {...this.props} />
          :
          <Loading />
        }
      </div>
    );
  }
}
