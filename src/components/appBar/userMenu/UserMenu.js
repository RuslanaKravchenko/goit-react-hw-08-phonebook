import React from 'react';
import { useDispatch } from 'react-redux';
import authActions from '../../../redux/auth/authActions';
import sprite from '../../../assets/symbol-defs.svg';
import { updateUserProfileOperation } from '../../../redux/auth/authOperations';
const user = {
  displayName: 'Ruslana',
  photoUrl: 'bububu',
};

const UserMenu = () => {
  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(authActions.signOut());
  };

  const onHandleUpdateUser = () => {
    dispatch(updateUserProfileOperation(user));
  };

  return (
    <div>
      <button
        className="user-profile_btn"
        onClick={onHandleUpdateUser}
        type="button"
      >
        <svg className="user-profile_icon" width="28px" height="28px">
          <use href={sprite + '#account_circle'} />
        </svg>
      </button>
      {/* <img src="" alt="" width="32" /> */}
      {/* <span >Welcome, {name}</span> */}
      <button className="logout_btn" type="button" onClick={onHandleLogout}>
        <svg className="logout_icon" width="28px" height="28px">
          <use href={sprite + '#logout'} />
        </svg>
      </button>
    </div>
  );
};

export default UserMenu;
