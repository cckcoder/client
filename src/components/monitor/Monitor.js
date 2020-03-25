import React, { Component } from "react";
import Calulator from "./Calulator";
import ProductList from "../product/ProductList";
import axios from "axios";

class Monitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      orders: [],
      confirm: false,
      msg: ""
    };

    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
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
        quantity: 1,
        confirm: false
      });
    }

    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);

    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders
    });
  }

  delOrder(product) {
    let findOrder = this.state.orders.find(
      order => order.product.productId == product.productId
    );

    let resultOrder = this.state.orders.filter(
      order => order.product.productId != product.productId
    );

    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice);

    this.setState({
      totalPrice: totalPrice,
      orders: resultOrder,
      confirm: false
    });
  }

  cancelOrder() {
    this.setState({
      totalPrice: 0,
      orders: [],
      confirm: false,
      msg: ""
    });
  }

  confirmOrder() {
    const { totalPrice, orders } = this.state;
    if (orders && orders.length > 0) {
      axios
        .post("http://localhost:3001/orders", {
          orderedDate: new Date(),
          totalPrice,
          orders
        })
        .then(res => {
          this.cancelOrder();
          this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: "Order was recorded"
          });
        });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: "Please select order"
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.confirm && (
          <div className="alert alert-secondary title text-right">
            {this.state.msg}
          </div>
        )}

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
              onDeleteOrder={this.delOrder}
              onCancelOrder={this.cancelOrder}
              onConfirmOrder={this.confirmOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
