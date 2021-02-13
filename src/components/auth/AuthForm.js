import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  signUpOperation,
  signInOperation,
} from '../../redux/auth/authOperations';
import { showNoticeMessage } from '../../redux/notice/noticeActions';
import AuthFormStyled from './AuthFormStyled';

const initialState = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUser] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (!user.email.length) {
      dispatch(showNoticeMessage('Please enter email'));
      return;
    }

    if (!user.password.length) {
      dispatch(showNoticeMessage('Please enter password'));
      return;
    }

    if (user.password.length < 6) {
      dispatch(showNoticeMessage('Password should be at least 6 characters'));
      return;
    }

    if (location.pathname === '/signup') {
      dispatch(signUpOperation(user));
    } else dispatch(signInOperation(user));

    setUser({ ...initialState });
  };

  const { email, password } = user;

  return (
    <AuthFormStyled>
      <form onSubmit={onHandleSubmit} className="auth_form">
        <label className="form_fild">
          <span className="form_text">Email: </span>

          <input
            className="form_input "
            placeholder="Enter email"
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </label>

        <label className="form_fild">
          <span className="form_text">Password: </span>

          <input
            className="form_input"
            placeholder="Enter password"
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </label>

        <button className="form_btn" type="submit">
          {location.pathname === '/signup' ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </AuthFormStyled>
  );
};

export default AuthForm;
