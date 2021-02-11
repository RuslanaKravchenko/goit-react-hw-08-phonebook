import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebookContacts.contacts;
const getFilter = state => state.phonebookContacts.filter;
const getLoading = state => state.phonebookContacts.loading;
const getError = state => state.phonebookContacts.error;
const getContactId = state => state.phonebookContacts.idValue;

//  const getContactById = getContactId => {
//    const contactById = contacts.find(contact => contact.id === idValue);
//    return contactById;
//  };

const getContactById = createSelector(
  [getContacts, getContactId],
  (contacts, idValue) => {
    const contactById = contacts.find(contact => contact.id === idValue);
    return contactById;
  },
);

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const arr = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    const result = arr.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB)
        //сортируем строки по возрастанию
        return -1;
      if (nameA > nameB) return 1;
      return 0; // Никакой сортировки
    });
    return result;
  },
);

const contactsSelectors = {
  getContacts,
  getVisibleContacts,
  getContactId,
  getFilter,
  getLoading,
  getError,
  getContactById,
};

export default contactsSelectors;
