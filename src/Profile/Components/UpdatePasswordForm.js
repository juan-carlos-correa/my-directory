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

class ProfileForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      password: '',
      newPassword: '',
      repeatPassword: '',
      errors: {
        password: '',
        newPassword: '',
        repeatPassword: '',
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
    let result;

    if (name === 'password' || name === 'newPassword') {
      result = this.passwordValidation(value);
    } else if (name === 'repeatPassword') {
      result = this.repeatPasswordValidation(value);
    }

    errors[name] = result.isValid ? '' : result.errors[0];

    this.setState({ errors });
  }

  getFormValidations = ({ password, newPassword, repeatPassword }) => {
    const { errors } = this.state;
    let isValid = true;
    const passValidator = this.passwordValidation(password);
    const newPassValidator = this.passwordValidation(newPassword);
    const repeatPassValidator = this.repeatPasswordValidation(repeatPassword);

    if (!passValidator.isValid) {
      errors.password = passValidator.errors[0];
      isValid = false
    }

    if (!newPassValidator.isValid) {
      errors.newPassword = newPassValidator.errors[0];
      isValid = false
    }

    if (!repeatPassValidator.isValid) {
      errors.repeatPassword = repeatPassValidator.errors[0];
      isValid = false
    }

    return { errors, isValid };
  }

  passwordValidation = (password) => {
    return Validators(password).isMinLength(6).isMaxLength(60).getResult();
  }

  repeatPasswordValidation = (repeatPassword) => {
    const { newPassword } = this.state
    return Validators(repeatPassword).isEqual(newPassword).getResult();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { password, newPassword, repeatPassword } = this.state;

    const validateForm = this.getFormValidations({ password, newPassword, repeatPassword });

    if (!validateForm.isValid) {
      const errors = validateForm.errors;
      return this.setState({ errors });
    }

    handleSubmit({ password, newPassword, repeatPassword });
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

  render () {
    const { errors, password, newPassword, repeatPassword } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="password">Contraseña actual</Label>
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
          <Label for="newPassword">Nueva contraseña</Label>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            value={newPassword}
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.newPassword}
          />
          <FormFeedback>{errors.newPassword}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="repeatPassword">Repetir nueva contraseña</Label>
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
          <Button color="primary">ACTUALIZAR</Button>
        </FormGroup>
      </Form>
    );
  }
}

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
