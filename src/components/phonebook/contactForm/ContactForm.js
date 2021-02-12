import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../../redux/contacts/contactsOperations';
import { showNoticeMessage } from '../../../redux/notice/noticeActions';
import { hideModal } from '../../../redux/modal/modalActions';
import contactsSelectors from '../../../redux/contacts/contactsSelectors';

import Form from './ContactFormStyled';


const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ contacts }) => {
  const [newContact, setNewContact] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    setNewContact(prevState => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (contacts.some(item => item.name === newContact.name)) {
      dispatch(showNoticeMessage(`${newContact.name} is already in contacts`));
      return;
    }
    if (contacts.some(item => item.number === newContact.number)) {
      dispatch(showNoticeMessage(`${newContact.number} is already in use`));
      return;
    }

    if (!newContact.name.length) {
      dispatch(showNoticeMessage('Please enter a name'));
      return;
    }

    if (!newContact.number.length) {
      dispatch(showNoticeMessage('Please enter a number'));
      return;
    }
    const regex = /^(\+38|7|8)?[\s-]?\(?[0][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;

    if (!regex.test(newContact.number)) {
      dispatch(showNoticeMessage('Рlease enter the correct phone number'));
      return;
    }
    dispatch(contactsOperations.addNewContact(newContact));

    dispatch(hideModal());
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <h2 className="form_title">Add new contact</h2>
      <label className="form_fild">
        <span className="form_text">Name: </span>
        <input
          className="form_input"
          placeholder="Enter name..."
          type="text"
          name="name"
          value={newContact.name}
          onChange={onHandleChange}
        ></input>
      </label>
      <label className="form_fild">
        <span className="form_text">Number: </span>
        <input
          className="form_input"
          placeholder="+38(067)-111-11-11"
          type="tel"
          name="number"
          value={newContact.number}
          onChange={onHandleChange}
        ></input>
      </label>
      <button className="form_btn" type="submit">
        Add contact
      </button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

export default connect(mapStateToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array,
};
