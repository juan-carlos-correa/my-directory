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
  handleSubmit,
  handleChange,
  handleBlur,
  handleFocus,
  isLoading,
}) => {
  const { password, newPassword, repeatPassword } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="password">Contraseña actual</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          placeholder="******"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          placeholder="******"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
          placeholder="******"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          invalid={!!errors.repeatPassword}
        />
        <FormFeedback>{errors.repeatPassword}</FormFeedback>
      </FormGroup>

      <FormGroup className="text-center">
        <Button disabled={isLoading} color="primary">ACTUALIZAR</Button>
      </FormGroup>
    </Form>
  );
}

ProfileForm.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string.isRequired,
    newPassword: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    password: PropTypes.string.isRequired,
    newPassword: PropTypes.string.isRequired,
    repeatPassword: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ProfileForm;
