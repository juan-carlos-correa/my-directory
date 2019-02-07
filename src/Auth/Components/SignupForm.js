import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class SignupForm extends Component {
  componentDidUpdate () {
    const {
      isSignupSuccess,
      cleanForm,
      isFormClean,
    } = this.props;

    if (isSignupSuccess && !isFormClean()) {
      cleanForm();
    }
  }

  render () {
    const {
      values,
      errors,
      isLoading,
      handleChange,
      handleBlur,
      handleFocus,
      handleSubmit,
    } = this.props;

    const { name, email, password, repeatPassword } = values;

    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            invalid={!!errors.name}
          />
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@mail.com"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            invalid={!!errors.email}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            invalid={!!errors.password}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="repeatPassword">Repetir contraseña</Label>
          <Input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            invalid={!!errors.repeatPassword}
          />
          <FormFeedback>{errors.repeatPassword}</FormFeedback>
        </FormGroup>

        <FormGroup className="text-center">
          <Button disabled={isLoading} color="primary">REGISTRARME</Button>
        </FormGroup>

        <FormGroup className="text-center">
          <Link to='/signin'>Iniciar sesión</Link>
        </FormGroup>
      </Form>
    )
  }
};

SignupForm.propTypes = {
  isSignupSuccess: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isFormClean: PropTypes.func.isRequired,
  cleanForm: PropTypes.func.isRequired,
};

export default  SignupForm;
