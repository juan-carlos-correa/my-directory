import React, { Component } from 'react';
import Validators from '../Lib/Validators';

const WithControlledForm = (FormComponent, state = {}, formValidations = {}) => (
  class WithFormMethodsHOC extends Component {
    constructor (props) {
      super(props);

      this.state = {
        values: { ...state },
        errors: this._stateToErrors(state),
      };
    }

    _stateToErrors = (state) => {
      const errors = {};

      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i += 1) {
        errors[keys[i]] = '';
      }

      return errors;
    }

    _validateForm = (values) => {
      const { errors } = this.state;
      let isFormValid = true;

      for (let name in values) {
        const validations = formValidations[name];
        const value = values[name];
        const result = Validators().validate(values, value, validations);

        if (!result.isValid) {
          isFormValid = false;
          errors[name] = result.errors[0];
        } else {
          errors[name] = '';
        }
      }

      this.setState({ errors });
      return isFormValid;
    }

    isFormClean = () => {
      const { values } = this.state;
      const isValue = Object.values(values).filter(val => val.length > 0);
      return isValue.length === 0;
    }

    cleanForm = () => {
      const newValues = {};
      const { values } = this.state;

      for (let val in values) {
        newValues[val] = '';
      }

      this.setState({
        values: newValues,
        errors: this._stateToErrors(newValues),
      });
    }

    handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const { values } = this.state;
      let valueToAssign = value;

      if (type === 'checkbox') {
        valueToAssign = checked;
      }

      values[name] = valueToAssign;
      this.setState({ values });
    }

    handleBlur = (e) => {
      e.preventDefault();

      const { errors, values } = this.state;
      const { name, value } = e.target;
      const validations = formValidations[name];
      const result = Validators().validate(values, value, validations);
      errors[name] = !result.isValid ? result.errors[0] : '';
      this.setState({ errors });
    }

    handleFocus = (e) => {
      const { name } = e.target;
      const { errors } = this.state;

      if (!!errors[name].length) {
        this.setState({
          errors: {
            ...this.state.errors,
            [name]: '',
          }
        })
      }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { values } = this.state;
      const { handleSubmit } = this.props;

      if (this._validateForm(values)) {
        handleSubmit(values);
      }
    }

    render () {
      return (
        <FormComponent
          {...this.props}
          {...this.state}
          cleanForm={this.cleanForm}
          isFormClean={this.isFormClean}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleFocus={this.handleFocus}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
);

export default WithControlledForm;
