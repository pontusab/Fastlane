import React from 'react';
import { connect } from 'react-redux';
import Form from './Form.jsx';
import Loading from './Loading.jsx';
import productAction from '../action/productAction';

function select(state) {
  return {
    products: state.products,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(productAction());
  }

  render() {
    const products = this.props.products.cars;

    return (
      <div className="order">
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
