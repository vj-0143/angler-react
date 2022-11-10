import React from 'react';
import { Formik, Form } from 'formik';
import { Register } from './Register';
import * as Yup from 'yup';

export const Login = () => {
  const handlereset=()=>{
    alert("reset the feilds");
  }
  const formsubmit=()=>{
    alert("form submited successfully");
  }
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form onSubmit={formsubmit}>
            <Register label="First Name" name="firstName" type="text" />
            <Register label="last Name" name="lastName" type="text" />
            <Register label="Email" name="email" type="email" />
            <Register label="password" name="password" type="password" />
            <Register label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Login</button>&nbsp;
            <button className="btn btn-danger mt-3 ml-3" type="reset" onClick={handlereset}>Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}