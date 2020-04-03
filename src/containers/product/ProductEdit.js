import React, { Component } from "react";
import { connect } from "react-redux";
import { productFetch, productCreate, productUpdate } from "../../actions";
import Header from "../../components/Header";
import ProductForm from "../../components/product/ProductForm";
import Footer from "../../components/Footer";

class ProductEdit extends Component {
  componentDidMount() {
    let productId = this.props.match.params.id;

    if (productId) {
      this.props.productFetch(productId);
    }
  }
  render() {
    const { formValues, match,
      products,
      productCreate,
      productUpdate
    } = this.props;

    return (
      <div>
        <Header />
        <div className="container col-md-5">
          {match.path.indexOf("add") > 0 && (
            <div>
              <h2>Add</h2>
              {products.saved && (
                <div className="alert alert-secondary title">
                  {products.msg}
                </div>
              )}
              <ProductForm onProductSubmit={() => productCreate(formValues)} />
            </div>
          )}

          {match.path.indexOf("edit") > 0 && (
            <div>
              <h2>Edit</h2>
              {products.saved && (
                <div className="alert alert-secondary title">
                  {products.msg}
                </div>
              )}
              <ProductForm
                onProductSubmit={() => productUpdate(products.id, formValues)}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ form, products }) {
  return {
    formValues: form.productForm ? form.productForm.values : null,
    products
  };
}

export default connect(mapStateToProps, {
  productFetch,
  productUpdate,
  productCreate
})(ProductEdit);
