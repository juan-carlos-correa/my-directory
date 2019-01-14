import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validators from '../../Utils/Lib/Validators';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';

class SignupForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      errors: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
    };
  }

  updateState = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    this.resetErrors();

    const {
      name,
      email,
      password,
      repeatPassword,
    } = this.state;

    const validateForm = this.getFormValidations({ name, email, password, repeatPassword });

    if (!validateForm.isValid) {
      const errors = validateForm.errors;
      return this.setState({ errors });
    }

    onSubmit({ name, email, password });
  }

  getFormValidations = ({ name, email, password, repeatPassword }) => {
    const errors = {};
    const nameValidator = Validators(name).isMinLength(3).isMaxLength(30).getResult();
    const emailValidator = Validators(email).isEmail().getResult();
    const passValidator = Validators(password).isMinLength(6).isMaxLength(60).getResult();
    const repeatPassValidator = Validators(repeatPassword).isEqual(password).getResult();

    if (!nameValidator.isValid) {
      errors.name = nameValidator.errors[0];
    }

    if (!emailValidator.isValid) {
      errors.email = emailValidator.errors[0];
    }

    if (!passValidator.isValid) {
      errors.password = passValidator.errors[0];
    }

    if (!repeatPassValidator.isValid) {
      errors.repeatPassword = repeatPassValidator.errors[0];
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  resetErrors = () => {
    this.setState({
      errors: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
    })
  }

  render () {
    const {
      name,
      email,
      password,
      repeatPassword,
      errors,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            value={name}
            onChange={this.updateState}
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
            onChange={this.updateState}
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
            onChange={this.updateState}
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
            onChange={this.updateState}
            invalid={!!errors.repeatPassword}
          />
          <FormFeedback>{errors.repeatPassword}</FormFeedback>
        </FormGroup>

        <FormGroup className="text-center">
          <Button color="primary">REGISTRARME</Button>
        </FormGroup>

        <FormGroup className="text-center">
          <Button color="link">Iniciar sesión</Button>
        </FormGroup>
      </Form>
    )
  }
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default  SignupForm;
