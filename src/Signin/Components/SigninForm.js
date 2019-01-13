import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class SigninForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  updateState = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render () {
    const {
      firstname,
      lastname,
      email,
      password,
      repeatPassword,
    } = this.state;

    return (
      <Form>
        <FormGroup>
          <Label for="firstname">Nombre</Label>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="John"
            value={firstname}
            onChange={this.updateState}
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastname">Apellidos</Label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Doe"
            value={lastname}
            onChange={this.updateState}
          />
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
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={this.updateState}
          />
        </FormGroup>

        <FormGroup>
          <Label for="repeatPassword">Repetir contraseña</Label>
          <Input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={this.updateState}
          />
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
