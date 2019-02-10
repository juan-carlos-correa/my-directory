import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from 'reactstrap';

const UserForm = ({
  errors,
  values,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
}) => {
  const {
    name,
    job,
    email,
    phone,
    subsidiary,
    password,
    repeatPassword,
  } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={name}
          placeholder="John Doe"
          invalid={!!errors.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormFeedback>{errors.name}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="john.doe@mail.com"
          invalid={!!errors.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormFeedback>{errors.email}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label for="job">Puesto</Label>
        <Input
          id="job"
          name="job"
          type="text"
          value={job}
          placeholder="Web developer"
          invalid={!!errors.job}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
          placeholder="3121234567"
          invalid={!!errors.phone}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormFeedback>{errors.phone}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label for="subsidiary">Oficina</Label>
        <Input
          id="subsidiary"
          name="subsidiary"
          type="text"
          value={subsidiary}
          placeholder="Guadalajara"
          invalid={!!errors.subsidiary}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FormFeedback>{errors.subsidiary}</FormFeedback>
      </FormGroup>

       <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="******"
            invalid={!!errors.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            placeholder="******"
            invalid={!!errors.repeatPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormFeedback>{errors.repeatPassword}</FormFeedback>
        </FormGroup>

        <FormGroup className="text-center">
          <Button color="primary">INVITAR</Button>
        </FormGroup>

        <FormGroup className="text-center">
          <Link to='/main/dashboard'>Cancelar</Link>
        </FormGroup>
    </Form>
  );
}

UserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default UserForm;
