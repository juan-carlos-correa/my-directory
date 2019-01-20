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

    const { user } = props;
    const {
      name,
      phone,
      job,
      subsidiary,
    } = user;

    this.state = {
      name,
      phone,
      job,
      subsidiary,
      errors: {
        name: '',
        phone: '',
        job: '',
        subsidiary: '',
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

    if (name === 'name' || name === 'job' || name === 'subsidiary') {
      result = Validators(value).isMinLength(3).isMaxLength(30).getResult();
    } else if (name === 'phone') {
      result = Validators(value).isMinLength(7).isMaxLength(15).getResult();
    }

    errors[name] = result.isValid ? '' : result.errors[0];

    this.setState({ errors });
  }

  getFormValidations = ({ name, job, subsidiary, phone }) => {
    const { errors } = this.state;
    let isValid = true;
    const nameVal = Validators(name).isMinLength(3).isMaxLength(30).getResult();
    const jobVal = Validators(job).isMinLength(3).isMaxLength(30).getResult();
    const subsidiaryVal = Validators(subsidiary).isMinLength(3).isMaxLength(30).getResult();
    const phoneVal = Validators(phone).isMinLength(7).isMaxLength(15).getResult();

    if (!nameVal.isValid) {
      isValid = false;
      errors.name = nameVal.errors[0];
    }

    if (!jobVal.isValid) {
      isValid = false;
      errors.job = jobVal.errors[0];
    }

    if (!subsidiaryVal.isValid) {
      isValid = false;
      errors.subsidiary = subsidiaryVal.errors[0];
    }

    if (!phoneVal.isValid) {
      isValid = false;
      errors.phone = phoneVal.errors[0];
    }

    return { errors, isValid };
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { name, phone, job, subsidiary } = this.state;

    const validateForm = this.getFormValidations({ name, phone, job, subsidiary });

    if (!validateForm.isValid) {
      const errors = validateForm.errors;
      return this.setState({ errors });
    }

    handleSubmit({ name, phone, job, subsidiary });
  }

  render () {
    const { errors, name, phone, job, subsidiary } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.name}
          />
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="job">Puesto de trabajo</Label>
          <Input
            id="job"
            name="job"
            type="text"
            value={job}
            placeholder="Desarrollador web"
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.job}
          />
          <FormFeedback>{errors.job}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            placeholder="555-123-45678"
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.phone}
          />
          <FormFeedback>{errors.phone}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="subsidiary">Sucursal</Label>
          <Input
            id="subsidiary"
            name="subsidiary"
            type="tel"
            value={subsidiary}
            placeholder="Guadalajara"
            onChange={this.updateState}
            onBlur={this.singleValidate}
            onFocus={this.removeError}
            invalid={!!errors.subsidiary}
          />
          <FormFeedback>{errors.phone}</FormFeedback>
        </FormGroup>

        <FormGroup className="text-center">
          <Button color="primary">ACTUALIZAR</Button>
        </FormGroup>
      </Form>
    );
  }
}

ProfileForm.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
    name: PropTypes.string,
    phone: PropTypes.string,
    job: PropTypes.string,
    subsidiary: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
