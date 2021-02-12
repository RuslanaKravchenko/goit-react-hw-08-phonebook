import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { CSSTransition } from 'react-transition-group';

import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import { showModal } from '../../redux/modal/modalActions';

import Spinner from '../loader/Loader';
import sprite from '../../assets/symbol-defs.svg';
import Main from './PhonebookStyled';

const Phonebook = ({ contacts, isLoadingContacts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());

    // eslint-disable-next-line
  }, []);

  const openAddContsctForm = () => {
    dispatch(showModal('openAddContsctForm'));
  };

  return (
    <>
      {isLoadingContacts && <Spinner />}
      <Main>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="phonebook_title">Contacts</h1>
        </CSSTransition>

        {contacts.length > 1 && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={400}
            classNames="filter"
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        )}

        <CSSTransition
          in={true}
          appear={true}
          timeout={550}
          classNames="contactsList"
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>

        {contacts.length === 0 && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={550}
            classNames="contactsText"
            unmountOnExit
          >
            <p className="contacts_text">
              Your phone book is empty. Please add a contact.
            </p>
          </CSSTransition>
        )}

        <CSSTransition
          in={true}
          appear={true}
          timeout={700}
          classNames="openContactForm_btn"
          unmountOnExit
        >
          <button
            type="button"
            className="openContactForm_btn"
            onClick={openAddContsctForm}
          >
            <svg width="34px" height="34px">
              <use href={sprite + '#person_add'} />
            </svg>
          </button>
        </CSSTransition>
      </Main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isLoadingContacts: contactsSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps)(Phonebook);

Phonebook.propTypes = {
  contacts: PropTypes.array,
  isLoadingContacts: PropTypes.bool,
};
