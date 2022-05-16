import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Links } from '../../static/Links';
export const SignupForm = () => {
  return (
    <div className='signUp-logIn-Wrapper'>
      <Form className='formStyle'>
        <h3 className='text-center'>SignUp</h3>
        <Form.Group className='mb-3 ' controlId='firstName'>
          <Form.Label>
            First Name<span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type='email' placeholder='First Name' />
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='lastName'>
          <Form.Label>
            Last Name<span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type='email' placeholder='Last Name' />
        </Form.Group>
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
        <Form.Group className='mb-3' controlId='confirmPassword'>
          <Form.Label>
            Confirm Password<span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button className='buttonFullLength' type='submit'>
          SignUp
        </Button>
        <p className='text-end pt-2 '>
          Already Register{' '}
          <Link style={{ textDecoration: 'none' }} to={Links.login}>
            sign in?
          </Link>
        </p>
      </Form>
    </div>
  );
};
