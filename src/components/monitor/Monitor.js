import React, { Component } from "react";
import Calulator from "./Calulator";
import ProductList from "../product/ProductList";

class Monitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      orders: []
    };

    this.addOrder = this.addOrder.bind(this);
  }

  addOrder(product) {
    let findOrder = this.state.orders.find(
      order => order.product.productId == product.productId
    );

    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({
        product: product,
        quantity: 1
      });
    }

    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);

    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            ></ProductList>
          </div>
          <div className="col-md-3">
            <Calulator
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
