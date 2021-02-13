import styled from 'styled-components';
import randomRGB from '../../utils/randomRGB';

const UserProfileStyled = styled.div`
  z-index: 950;
  padding: 20px;
  position: fixed;
  top: 60px;
  background-color: ${props =>
    props.theme.title === 'light'
      ? '#fff'
      : props.theme.colors.modalBackground};
  border: ${props =>
    props.theme.title === 'light'
      ? '1px solid  #e1e4e8'
      : '1px solid   #30363d'};

  width: 96%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 767px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    right: 20px;
    width: 300px;
  }

  .profileUser_avatar-fild {
    display: flex;
    justify-content: center;

    margin-bottom: 10px;
    & svg {
      fill: ${props => props.theme.colors.navLink};
    }
  }

  .avatar_container {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
    }
  }

  .avatar_img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profileUser_span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    font-size: 28px;
    font-weight: 500;
    background-color: ${randomRGB};
    border-radius: 50%;
  }

  .profileUser_name {
    margin-bottom: 5px;
  }

  .profileUser_email {
    margin-bottom: 15px;
    font-size: 16px;
    color: ${props => props.theme.colors.accentText};
  }

  .profile_btn {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    & svg {
      fill: #7c8182;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:focus,
    &:hover {
      transform: scale(1.1);
      outline: none;
    }
  }

  .profile_btn:hover svg {
    fill: #7915c5;
  }
  .open_updateProfile_btn {
    margin-right: 20px;
  }
`;
export default UserProfileStyled;
