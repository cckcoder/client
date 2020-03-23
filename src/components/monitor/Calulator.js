import React, { Component } from "react";

class Calulator extends Component {
  showOrders(orders) {
    if (!orders || orders.length == 0) {
      return <li className="text-right text-muted title">No orders</li>;
    } else {
      return orders.map(order => (
        <li className="text-right text-success title">
          {order.product.productName} x {order.product.quantity} ={" "}
          {order.product.unitPrice * order.product.quantity}
          <button className="btn btn-light btn-sm">X</button>
        </li>
      ));
    }
  }

  render() {
    const { totalPrice, orders } = this.props;

    return (
      <div>
        <h1 className="text-right">{totalPrice}</h1>
        <hr />
        <ul className="list-unstyled">{this.showOrders(orders)}</ul>
        <hr />
        <button className="btn btn-block btn-danger title">Confirm</button>
        <button className="btn btn-block btn-secondary title">Cancel</button>
      </div>
    );
  }
}

export default Calulator;
