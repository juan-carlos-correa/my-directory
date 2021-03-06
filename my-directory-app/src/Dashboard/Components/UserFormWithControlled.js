import WithControlledForm from '../../Utils/Components/WithControlledForm';
import UserForm from './UserForm';

const formState = {
  name: '',
  job: '',
  email: '',
  phone: '',
  subsidiary: '',
  password: '',
  repeatPassword: '',
  isAdmin: false,
};

const formValidations = {
  name: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
  },
  job: {
    isRequired: false,
    isMinLength: 3,
    isMaxLength: 90,
  },
  email: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
    isEmail: true,
  },
  phone: {
    isRequired: false,
    isMinLength: 7,
    isMaxLength: 15,
  },
  subsidiary: {
    isRequired: false,
    isMinLength: 3,
    isMaxLength: 90,
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
  isAdmin: {},
};

const UserFormControlled = WithControlledForm(UserForm, formState, formValidations);

export default UserFormControlled;

