import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;

    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
        <h5 className="mt-2">{productName}</h5>
        <p className="text-right title">{unitPrice} THB</p>

        {this.props.onAddOrder && (
          <button
            onClick={() => this.props.onAddOrder(this.props.product)}
            className="btn btn-block btn-secondary title"
          >
            Buy
          </button>
        )}

        {(this.props.onEditProduct || this.props.onDelProduct) && (
          <button className="btn btn-info col-5 title">Edit</button>
        )}

        {(this.props.onEditProduct || this.props.onDelProduct) && (
          <button
            onClick={() => this.props.onDelProduct(this.props.product)}
            className="btn btn-danger col-5 float-right title"
          >
            Delete
          </button>
        )}

        <hr />
      </div>
    );
  }
}

export default ProductItem;
