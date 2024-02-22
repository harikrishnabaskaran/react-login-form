import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const LoginForm = ({ setIsLoggedIn }) => {
  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').max(20, 'Name cannot be longer than 15 characters').min(3, 'Name cannot be less than 3 characters').matches(/^[a-zA-Z]+$/, 'Name can only contain letters'),
    email: Yup.string().email('Invalid email address').required('Email is required').max(30, 'Email cannot be longer than 30 characters').matches(/@/, 'Email must contain \'@\'').min(3, 'Email cannot be less than 3 characters'),
    password: Yup.string().required('Password is required').max(12, 'Password cannot be longer than 12 characters').min(3, 'Password cannot be less than 12 characters')
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
     
      setSubmitting(false);
      setIsLoggedIn(true); 
      navigate('/home'); 
    } catch (error) {
      console.error('Login failed:', error);
      setSubmitting(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" placeholder="Name" id="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" placeholder="Password" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button type="submit">Login</button>
          <p>
            Please <Link to="/register">Register</Link> If you don't have Account
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
