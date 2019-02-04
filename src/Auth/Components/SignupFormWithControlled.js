import SignupForm from './SignupForm';
import WithControlledForm from '../../Utils/Components/WithControlledForm';

const formState = {
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
};

const formValidations = {
  name: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
  },
  email: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 60,
    isEmail: true,
  },
  password: {
    isRequired: true,
    isMinLength: 6,
    isMaxLength: 60,
  },
  repeatPassword: {
    isRequired: true,
    isMinLength: 6,
    isMaxLength: 60,
    isEqual: 'password',
  },
};

const SignupFormWithControlled = WithControlledForm(SignupForm, formState, formValidations);

export default SignupFormWithControlled;
