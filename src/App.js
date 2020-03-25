import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Monitor from "./components/monitor/Monitor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: "" };
  }

  componentDidMount() {
    fetch("http://localhost:3001/products", {method: "GET"})
    .then(res => res.json())
    .then(res => {
      this.setState({products: res})
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.state.products} />
        <Footer company="Codewiz" email="codewiz@codewiz.com" />
      </div>
    );
  }
}

export default App;
