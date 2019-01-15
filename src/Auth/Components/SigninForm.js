import React, { Component } from 'react';
import Validators from '../../Utils/Lib/Validators';
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

class SigninForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  }

  updateState = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.resetErrors();

    const { onSubmit } = this.props;
    const { email, password } = this.state;

    const validateForm = this.getFormValidations({ email, password });

    if (!validateForm.isValid) {
      const errors = validateForm.errors;
      return this.setState({ errors });
    }

    onSubmit({ email, password });
  }

  getFormValidations = ({ email, password }) => {
    const { errors } = this.state;
    let isValid = true;
    const emailValidator = this.emailValidation(email);
    const passValidator = this.passwordValidation(password);

    if (!emailValidator.isValid) {
      errors.email = emailValidator.errors[0];
      isValid = false
    }

    if (!passValidator.isValid) {
      errors.password = passValidator.errors[0];
      isValid = false
    }

    return { isValid, errors };
  }

  singleValidate = (e) => {
    e.preventDefault();

    const { errors } = this.state;
    const { name, value } = e.target;
    const methodName = `${name}Validation`;

    const result = this[methodName](value);
    errors[name] = result.isValid ? '' : result.errors[0];

    return this.setState({ errors });
  }

  removeError = (e) => {
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

  emailValidation = (email) => {
    return Validators(email).isEmail().getResult();
  }

  passwordValidation = (password) => {
    return Validators(password).isMinLength(6).isMaxLength(60).getResult();
  }

  resetErrors = () => {
    this.setState({
      errors: {
        email: '',
        password: '',
      },
    })
  }

  render () {
    const { email, password, errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@mail.com"
            value={email}
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
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
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.password}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>

        <FormGroup className="text-center">
          <Button color="primary">ENVIAR</Button>
        </FormGroup>

        <FormGroup className="text-center">
          <Link to='/signup'>Crear cuenta</Link>
        </FormGroup>
      </Form>
    );
  }
}

SigninForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SigninForm;
