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

class SubsidiaryForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      tel: '',
    };
  }

  updateState = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render () {
    const { name, address, tel } = this.state;

    return (
      <Form>
        <FormGroup>
          <Label for="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Guadalajara"
            onChange={this.updateState}
          />
        </FormGroup>

        <FormGroup>
          <Label for="address">Domicilio</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={address}
            placeholder="Av México 123"
            onChange={this.updateState}
          />
        </FormGroup>

        <FormGroup>
          <Label for="tel">Teléfono</Label>
          <Input
            id="tel"
            name="tel"
            type="text"
            value={tel}
            placeholder="555-123-456"
            onChange={this.updateState}
          />
        </FormGroup>
      </Form>
    );
  }
}

SubsidiaryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default SubsidiaryForm;