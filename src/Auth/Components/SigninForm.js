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

  render () {
    const { email, password, errors } = this.state;

    return (
      <Form>
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

export default SigninForm;
