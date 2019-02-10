import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';

const ProfileForm = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
  isLoading,
}) => {
  const { name, job, phone, subsidiary } = values;

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
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          invalid={!!errors.subsidiary}
        />
        <FormFeedback>{errors.subsidiary}</FormFeedback>
      </FormGroup>

      <FormGroup className="text-center">
        <Button disabled={isLoading} color="primary">ACTUALIZAR</Button>
      </FormGroup>
    </Form>
  );
}

ProfileForm.propTypes = {
  values: PropTypes.shape({
    isAdmin: PropTypes.bool,
    name: PropTypes.string,
    phone: PropTypes.string,
    job: PropTypes.string,
    subsidiary: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    job: PropTypes.string,
    subsidiary: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProfileForm;
