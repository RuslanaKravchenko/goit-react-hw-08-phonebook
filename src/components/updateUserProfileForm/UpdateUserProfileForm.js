import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal } from '../../redux/modal/modalActions';

import sprite from '../../assets/symbol-defs.svg';
import UpdateUserProfileFormStyled from './UpdateUserProfileFormStyled';

import { updateUserProfileOperation } from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
import { showNoticeMessage } from '../../redux/notice/noticeActions';

const initialState = {
  displayName: '',
  email: '',
  password: '',
};

const UpdateUserProfileForm = () => {
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    ...initialState,
    email: userEmail,
    displayName: userName,
  });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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

    dispatch(updateUserProfileOperation(user));
    dispatch(hideModal());
  };

  return (
    <UpdateUserProfileFormStyled>
      <form className="updateUser_form" onSubmit={onHandleSubmit}>
        <div className="updateUser-avatar_fild">
          {userName ? (
            <span className="updateUser-avatar_span">
              {userName[0].toUpperCase()}
            </span>
          ) : (
            <svg className="updateUser_icon" width="80px" height="80px">
              <use href={sprite + '#account_circle'} />
            </svg>
          )}
        </div>

        <label className="updateUser_fild">
          <span className="updateUser_text"> Name:</span>

          <input
            className="updateUser_input"
            type="text"
            name="displayName"
            placeholder="Enter your name"
            value={user.displayName}
            onChange={onHandleChange}
          />
        </label>

        <label className="updateUser_fild">
          <span className="updateUser_text">Email:</span>

          <input
            className="updateUser_input"
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={onHandleChange}
          />
        </label>

        <label className="updateUser_fild">
          <span className="updateUser_text">Password: </span>

          <input
            className="updateUser_input"
            placeholder="Enter password"
            type="password"
            name="password"
            value={user.password}
            onChange={onHandleChange}
          />
        </label>

        <button className="updateUser_btn " type="submit">
          Save
        </button>
      </form>
    </UpdateUserProfileFormStyled>
  );
};

export default UpdateUserProfileForm;
