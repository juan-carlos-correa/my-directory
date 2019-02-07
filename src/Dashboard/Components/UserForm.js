import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';

const UserForm = ({
  errors,
  name,
  job,
  email,
  phone,
  subsidiary,
  handleChange,
  handleBlur,
  handleFocus,
  handleSubmit,
}) => (
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
  </Form>
);

UserForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default UserForm;
