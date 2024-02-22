import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/Register.css';

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    postCode: '',
    address: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required').max(15, 'First Name cannot be longer than 15 characters').matches(/^[a-zA-Z]+$/, 'First Name can only contain letters'),
    lastName: Yup.string().required('Last Name is required').max(15, 'Last Name cannot be longer than 15 characters').matches(/^[a-zA-Z]+$/, 'Last Name can only contain letters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required').matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
    postCode: Yup.string().required('Post Code is required').matches(/^[0-9]{6}$/, 'Post Code must be 6 digits'),
    address: Yup.string().required('Address is required').max(30, 'Address cannot be longer than 30 characters').matches(/^[a-zA-Z0-9\s]+$/, 'Address can only contain letters, numbers, and spaces')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    goToLogin();
  };
  
  const goToLogin = () => {
    window.location.href = '/login';
  };

  return (
    
    <div className="registration-form">
      <h2>Registration</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
        <div>
  <label htmlFor="firstName">First Name</label>
  <Field type="text" name="firstName" id="firstName" placeholder="First Name" />
  <ErrorMessage name="firstName" component="div" className="error"/>
</div>
<div>
  <label htmlFor="lastName">Last Name</label>
  <Field type="text" name="lastName" id="lastName" placeholder="Last Name" />
  <ErrorMessage name="lastName" component="div" className="error"/>
</div>
<div>
  <label htmlFor="email">Email</label>
  <Field type="email" name="email" id="email" placeholder="Email" />
  <ErrorMessage name="email" component="div" className="error" />
</div>
<div>
  <label htmlFor="phoneNumber">Phone Number</label>
  <Field type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
  <ErrorMessage name="phoneNumber" component="div" className="error"/>
</div>
<div>
  <label htmlFor="postCode">Post Code</label>
  <Field type="text" name="postCode" id="postCode" placeholder="Post Code" />
  <ErrorMessage name="postCode" component="div" className="error" />
</div>
<div>
  <label htmlFor="address">Address</label>
  <Field type="text" name="address" id="address" placeholder="Address"/>
  <ErrorMessage name="address" component="div" className="error"/>
</div>

          <button type="submit">Register</button>
          <p>Already have an account? Please <Link to="/login">Login </Link></p>
          
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

