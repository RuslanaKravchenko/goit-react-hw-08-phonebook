import styled from 'styled-components';
const Main = styled.main`
  padding-bottom: 20px;
  .phonebook_title {
    color: ${props => props.theme.colors.accentText};
    margin-bottom: 30px;
    text-align: center;
  }

  .contacts_title {
    color: #286671;
    margin-bottom: 20px;
    text-align: center;
  }

  .contacts_text {
    padding: 0 10px;
    text-align: center;
    color: #464b51;
  }

  .openContactForm_btn {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #7915c5;
    border: transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    & svg {
      fill: #fff;
    }

    &:focus,
    &:hover {
      transform: scale(1.2);
      box-shadow: 6px 8px 18px 3px rgba(98, 46, 150, 0.23);
      outline: none;
    }

    @media (min-width: 768px) {
      right: 40px;
      bottom: 40px;
    }
  }

  /* ================ animations =========== */

  .title-appear {
    opacity: 0;
    transform: translateY(-100%);
  }

  .title-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .filter-appear {
    opacity: 0;
  }

  .filter-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms;
  }

  .contactsList-appear {
    opacity: 0;
  }

  .contactsList-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  }

  .contactsText-appear {
    opacity: 0;
  }

  .contactsText-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 250ms;
  }

  .openContactForm_btn-appear {
    opacity: 0;
  }
  .openContactForm_btn-appear-active {
    opacity: 1;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 400ms;
  }
`;
export default Main;
