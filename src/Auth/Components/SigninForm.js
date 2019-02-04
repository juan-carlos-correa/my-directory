import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SigninForm = ({
  email,
  password,
  errors,
  isSigninLoading,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit}>
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
        placeholder="******"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        invalid={!!errors.password}
      />
      <FormFeedback>{errors.password}</FormFeedback>
    </FormGroup>

    <FormGroup className="text-center">
      <Button disabled={isSigninLoading} color="primary">ENVIAR</Button>
    </FormGroup>

    <FormGroup className="text-center">
      <Link to='/signup'>Crear cuenta</Link>
    </FormGroup>
  </Form>
);

SigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isSigninLoading: PropTypes.bool.isRequired,
}

export default SigninForm;
