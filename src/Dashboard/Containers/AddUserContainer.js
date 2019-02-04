import React from 'react';
import UserForm from '../Components/UserForm';
import WithControlledForm from '../../Utils/Components/WithControlledForm';

const formState = {
  name: '',
  job: '',
  email: '',
  phone: '',
  subsidiary: '',
};

const formValidations = {
  name: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
  },
  job: {
    isRequired: true,
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
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
  },
  subsidiary: {
    isRequired: true,
    isMinLength: 3,
    isMaxLength: 90,
  },
};

const UserFormControlled = WithControlledForm(UserForm, formState, formValidations);

const AddUserContainer = () => {
  const handleSubmit = (values) => {
    console.log('submit', values)
  }

  return (
    <section>
      <h2>AddUserContainer</h2>
      <UserFormControlled handleSubmit={handleSubmit} />
    </section>
  );
}

export default AddUserContainer;
