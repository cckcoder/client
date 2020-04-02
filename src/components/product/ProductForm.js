import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { productFormField } from "./formFields";

class ProducForm extends Component {
  renderFields(formFields) {
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          required={required}
          component={FormField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields(productFormField)}
          <button className="btn btn-block btn-info title" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  productFormField.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = "Please input value";
    }
  });
  return errors;
}

ProducForm = reduxForm({ validate, form: "productForm" })(ProducForm);

export default ProducForm;
