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
import { Link } from 'react-router-dom';

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

  componentDidUpdate () {
    const { isSignupSuccess } = this.props;

    if (isSignupSuccess && !this.isFormClean()) {
      this.cleanForm();
    }
  }

  isFormClean = () => {
    const { name, email, password, repeatPassword } = this.state;

    return !name.length && !email.length && !password.length && !repeatPassword.length;
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
    const { errors } = this.state;
    let isValid = true;
    const nameValidator = this.nameValidation(name);
    const emailValidator = this.emailValidation(email);
    const passValidator = this.passwordValidation(password);
    const repeatPassValidator = this.repeatPasswordValidation(repeatPassword);

    if (!nameValidator.isValid) {
      errors.name = nameValidator.errors[0];
      isValid = false
    }

    if (!emailValidator.isValid) {
      errors.email = emailValidator.errors[0];
      isValid = false
    }

    if (!passValidator.isValid) {
      errors.password = passValidator.errors[0];
      isValid = false
    }

    if (!repeatPassValidator.isValid) {
      errors.repeatPassword = repeatPassValidator.errors[0];
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

  nameValidation = (name) => {
    return Validators(name).isMinLength(3).isMaxLength(30).getResult();
  }

  emailValidation = (email) => {
    return Validators(email).isEmail().getResult();
  }

  passwordValidation = (password) => {
    return Validators(password).isMinLength(6).isMaxLength(60).getResult();
  }

  repeatPasswordValidation = (repeatPassword) => {
    const { password } = this.state
    return Validators(repeatPassword).isEqual(password).getResult();
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

  cleanForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
  }

  render () {
    const {
      name,
      email,
      password,
      repeatPassword,
      errors,
    } = this.state;

    const { isLoading } = this.props;

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
            onBlur={this.singleValidate}
            onFocus={this.removeError}
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

        <FormGroup>
          <Label for="repeatPassword">Repetir contraseña</Label>
          <Input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
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
  onSubmit: PropTypes.func.isRequired,
  isSignupSuccess: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default  SignupForm;
