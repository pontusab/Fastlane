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
    const user = localStorage.getItem('user');

    if (!user) setTimeout(() => window.location.replace('/start'), 3000);

    ::this.fetch();
  }

  componentWillUpdate(props) {
    const { order: { start, end } } = props;
    if (start && end) this.props.dispatch(priceAction(start, end));
  }

  onMouseOver() {
    // this.interval = setInterval(::this.fetch, 10000);
  }

  onMouseOut() {
    // clearInterval(this.interval);
  }

  fetch() {
    const location = this.props.order.start;
    this.props.dispatch(productAction(location));
  }

  render() {
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
