import SigninForm from './SigninForm';
import WithControlledForm from '../../Utils/Components/WithControlledForm';

const formState = {
  email: '',
  password: '',
};

const formValidations = {
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
  }
};

const SigninFormWithControlled = WithControlledForm(SigninForm, formState, formValidations);

export default SigninFormWithControlled;
