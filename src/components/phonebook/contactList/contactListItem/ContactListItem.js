import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsActions from '../../../../redux/contacts/contactsActions';
import contactsOperations from '../../../../redux/contacts/contactsOperations';
import contactsSelectors from '../../../../redux/contacts/contactsSelectors';

import { showModal } from '../../../../redux/modal/modalActions';

import ListItem from './ContactsListItemStyled';

import sprite from '../../../../assets/symbol-defs.svg';

const ContactListItem = ({
  contact,
  deleteContact,
  showModal,
  getIdValue,
  setFilter,
  contacts,
}) => {
  const onHandleDelete = e => {
    const { id } = e.currentTarget;
    deleteContact(id);

    if (contacts.length < 2) {
      setFilter('');
    }
  };

  const openEditProfile = e => {
    showModal('openEditProfile');
    const { id } = e.currentTarget;
    getIdValue(id);
  };

  const openContactInfo = e => {
    showModal('openContactInfo');
    const { id } = e.currentTarget;
    getIdValue(id);
  };

  return (
    <ListItem>
      <div className="listItem_meta" id={contact.id} onClick={openContactInfo}>
        {contact.avatar ? (
          <div className="avatar_container">
            <img className="avatar_img" src={contact.avatar} alt="avatar" />
          </div>
        ) : (
          <span className="avatar_span">{contact.name[0].toUpperCase()}</span>
        )}
        <div className="listItem_meta-info">
          <h3 className="listItem_name">{contact.name} </h3>

          <p className="listItem_number">{contact.number}</p>
          {contact.category && (
            <p className="listItem_category">{contact.category}</p>
          )}
        </div>
      </div>

      <div className="listItem_btns-container">
        <button
          type="button"
          className="material-icons listItem_btn"
          id={contact.id}
          onClick={openEditProfile}
        >
          <svg className="listItem_icon" width="25px" height="25px">
            <use href={sprite + '#edit'} />
          </svg>
        </button>

        <button
          type="button"
          className="material-icons listItem_btn"
          id={contact.id}
          onClick={onHandleDelete}
        >
          <svg className="listItem_icon" width="25px" height="25px">
            <use href={sprite + '#delete-icon-old'} />
          </svg>
        </button>
      </div>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => {
      dispatch(contactsOperations.deleteContact(id));
    },

    showModal: content => {
      dispatch(showModal(content));
    },
    getIdValue: id => {
      dispatch(contactsActions.getIdValue(id));
    },
    setFilter: value => {
      dispatch(contactsActions.setFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
  showModal: PropTypes.func,
  getContactById: PropTypes.func,
};
