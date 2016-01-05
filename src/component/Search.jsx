import React from 'react';
import { connect } from 'react-redux';
import SelectProduct from './SelectProduct.jsx';
import AutoComplete from './AutoComplete.jsx';
import CountDown from './CountDown.jsx';
import Estimate from './Estimate.jsx';
import Button from './Button.jsx';
import Loading from './Loading.jsx';
import productAction from '../action/productAction';

function select(state) {
  return {
    products: state.products,
    location: state.location,
  };
}

@connect(select)
export default class Search extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    products: React.PropTypes.object.isRequired,
    location: React.PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.timeout);
    this.startPoll();
  }

  componentWillMount() {
    this.dataFetch()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  dataFetch() {
    console.log(this.props.location);
    this.props.dispatch(productAction(this.props.location))
  }

  startPoll() {
    this.timeout = setTimeout(() => this.dataFetch(), 5000);
  }

  render() {
    const products = this.props.products.data;
    const selectedId = this.props.products.selected;
    const estimates = this.props.products.prices[selectedId];

    return (
      <div className="search">
        {
          products.length ?
            <div>
              <SelectProduct {...this.props} />
              <AutoComplete />
              <CountDown time={products[selectedId].estimate} pulse />
              { estimates && <Estimate estimate={estimates.estimate} /> }

              <Button path="/order" text={`Request ${products[selectedId].display_name}`} />
            </div>
          :
          <Loading />
        }
      </div>
    );
  }
}
