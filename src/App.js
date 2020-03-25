import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Monitor from "./components/monitor/Monitor";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: "" };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/products").then(res => {
      this.setState({ products: res.data });
    });
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
