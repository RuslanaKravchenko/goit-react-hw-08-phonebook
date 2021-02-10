import styled from 'styled-components';

const HomeViewStyled = styled.main`
  .home_fild {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }

  .backspace_btn {
    position: absolute;
    right: 10px;
    top: 40%;

    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus,
    &:hover {
      outline: none;
    }
  }

  .backspace_icon {
    fill: grey;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .backspace_btn:hover {
    & .backspace_icon {
      fill: #076c77;
    }
  }
  .home_text {
    margin-bottom: 5px;
    font-size: 18px;
    color: #076c77;
  }

  .home_input {
    height: 46px;
    padding: 5px 20px;
    border-radius: 30px;

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: 5px 5px 8px -4px rgba(117, 52, 210, 0.33);
    }
  }

  .call_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 40px;
    width: 70px;
    height: 70px;
    text-decoration: none;
    background-color: #09b909;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    & svg {
      fill: white;
    }

    &:focus,
    &:hover {
      transform: scale(1.1);
      outline: none;
      box-shadow: 0px 5px 17px 8px rgba(62, 197, 114, 0.2);
    }
  }

  .keyboard {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto 20px;

    max-width: 300px;
  }

  .keyboard_item {
    margin: 0 15px;

    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: 15px;
    }
  }

  .keyboard_btn {
    width: 60px;
    height: 60px;
    font-size: 40px;
    color: #2d474a;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &--star {
      font-weight: 300;
      font-size: 74px;
    }

    &:focus,
    &:hover {
      transform: scale(1.1);
      color: #883dc7;

      outline: none;
    }
  }
`;

export default HomeViewStyled;
