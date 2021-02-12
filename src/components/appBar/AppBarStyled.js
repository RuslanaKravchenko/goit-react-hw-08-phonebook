import styled from 'styled-components';
import randomRGB from '../../utils/randomRGB';

const AppBarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 900;
  display: flex;
  align-items: center;
  height: 64px;
  padding-right: 10px;
  padding-left: 10px;
  color: #fff;
  background-color: #122438;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  .app_nav {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
  }

  .main_nav {
    display: flex;
    align-items: center;
  }

  .auth_nav {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  .nav_item {
    color: #a9d5d5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .link {
    text-decoration: none;
    font-weight: 700;
    color: inherit;

    & svg {
      fill: #a9d5d5;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        fill: #7915c5;
      }
    }
  }

  .activeLink {
    & svg {
      fill: #7915c5;
    }
  }

  .userMenu_container {
    display: flex;
    align-items: center;
  }
  .user-profile_btn {
    width: 40px;
    height: 40px;
    font-size: 18px;
    color: inherit;

    border: 1px solid transparent;
    background-color: transparent;

    border-radius: 30px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    & svg {
      fill: #a9d5d5;
    }

    &:focus,
    &:hover {
      transform: scale(1.1);
      outline: none;
    }
  }

  .user-profile_btn:hover .user-profile_icon {
    fill: #7915c5;
  }

  .avatar_span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 24px;
    font-weight: 500;
    background-color: ${randomRGB};
    border-radius: 50%;
  }

  .auth_btn-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    color: inherit;
    text-decoration: none;

    border: 1px solid #a9d5d58c;

    border-radius: 30px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    & svg {
      fill: #a9d5d5;
    }

    &:focus,
    &:hover {
      color: #7915c5;
      border: 1px solid #883dc7f2;
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);
      outline: none;
      & svg {
        fill: #7915c5;
      }
    }
  }

  .auth_btn-activeLink {
    color: #7915c5;
    border: 1px solid #883dc7f2;
    box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);

    & svg {
      fill: #7915c5;
    }
  }
`;
export default AppBarStyled;
