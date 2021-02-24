import styled from 'styled-components';
import randomRGB from '../../utils/randomRGB';

const UpdateUserProfileFormStyled = styled.div`
  padding: 30px 15px;

  @media (min-width: 768px) {
    padding: 30px 40px;
  }

  .updateUser_form {
    display: flex;
    flex-direction: column;
  }

  .updateUser_fild {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &-category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    &-date {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  .updateUser_text {
    margin-bottom: 5px;
    font-size: 18px;
    color: ${props => props.theme.colors.accentText};
  }

  .updateUser_input {
    width: 100%;
    height: 46px;
    padding: 5px 20px;
    border-radius: 10px;

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);
    }
  }

  .updateUser_btn {
    margin: 0 auto;

    width: 150px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #7915c5;
    border-color: #7915c5;

    border-radius: 5px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:focus,
    &:hover {
      color: #7915c5;
      background-color: ${props => props.theme.colors.modalBackground};
      border: 2px solid #883dc7f2;
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);

      outline: none;
    }
  }

  .avatar_fild {
    position: relative;
    margin: 0 auto;
    width: 80px;

    & svg {
      fill: ${props => props.theme.colors.navLink};
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .avatar_label {
    display: block;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.05);
    }
  }

  .avatar_input {
    display: none;
  }

  .avatar_span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    font-size: 26px;
    font-weight: 700;
    background-color: ${randomRGB};
    border-radius: 50%;
  }

  .avatar_container {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
  }

  .avatar_img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar_icon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .avatar_avatar_icon-wpapper {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 3px rgb(0 0 0 / 20%);
  }

  .avatar_btn {
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    & .avatar_icon {
      fill: ${props => props.theme.colors.primaryText};
    }

    &:hover,
    &:focus {
      outline: none;

      & .avatar_icon {
        fill: #7c41c5;
      }
    }
  }
`;
export default UpdateUserProfileFormStyled;
