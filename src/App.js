import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductItem from "./components/product/ProductItem"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productName="IPhone X" unitPrice="40,500"/>
        <ProductItem productName="IPAD Pro 10.5" unitPrice="30,500"/>
        <ProductItem productName="IPAD Mini 4" unitPrice="19,500"/>
        <Footer company="Codewiz" email="codewiz@codewiz.com"/>
      </div>
    );
  }
}

export default App;
