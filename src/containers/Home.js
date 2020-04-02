import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Codewiz" email="codewiz@codewiz.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);
