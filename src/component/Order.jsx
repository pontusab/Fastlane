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
    location: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(productAction());
  }

  onMouseOver() {
    this.interval = setInterval(::this.fetch, 5000);
  }

  onMouseOut() {
    clearInterval(this.interval);
  }

  fetch() {
    this.props.dispatch(productAction({
      location: this.props.products.location,
    }));
  }

  render() {
    const products = this.props.products.cars;

    return (
      <div className="order" onMouseOut={::this.onMouseOut} onMouseOver={::this.onMouseOver}>
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
