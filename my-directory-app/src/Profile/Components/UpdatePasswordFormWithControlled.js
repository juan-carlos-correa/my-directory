import UpdatePasswordForm from './UpdatePasswordForm';
import WithControlledForm from '../../Utils/Components/WithControlledForm';

const formState = {
  password: '',
  newPassword: '',
  repeatPassword: '',
};

const formValidations = {
  password: {
    isRequired: true,
    isMinLength: 6,
    isMaxLength: 60,
  },
  newPassword: {
    isRequired: true,
    isMinLength: 6,
    isMaxLength: 60,
  },
  repeatPassword: {
    isRequired: true,
    isMinLength: 6,
    isMaxLength: 60,
    isEqual: 'newPassword',
  },
};

const UpdatePasswordFormWithControlled = WithControlledForm(UpdatePasswordForm, formState, formValidations);

export default UpdatePasswordFormWithControlled;
