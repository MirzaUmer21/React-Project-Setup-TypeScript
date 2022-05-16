import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Links } from '../../static/Links';
export const LoginForm = () => {
  return (
    <div className='signUp-logIn-Wrapper'>
      <Form className=' formStyle'>
        <h3 className='text-center'>Login</h3>
        <Form.Group className='mb-3 ' controlId='email'>
          <Form.Label>
            Email address<span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>
            Password<span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <p>
          Forgot{' '}
          <Link style={{ textDecoration: 'none' }} to={'#'}>
            Password
          </Link>
        </p>
        <Button className='buttonFullLength' type='submit'>
          Login
        </Button>
        <p className='text-end pt-2 '>
          Not Register{' '}
          <Link style={{ textDecoration: 'none' }} to={Links.signup}>
            sign up
          </Link>
        </p>
      </Form>
    </div>
  );
};
