import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductItem from "./components/product/ProductItem"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer company="Codewiz" email="codewiz@codewiz.com"/>
      </div>
    );
  }
}

export default App;
