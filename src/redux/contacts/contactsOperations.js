import axios from 'axios';
import { refreshTokenOperation } from '../auth/authOperations';
import contactsActions from './contactsActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const addNewContact = contact => async (dispatch, getState) => {
  const localId = getState().auth.user.localId;
  const token = getState().auth.token.idToken;
  dispatch(contactsActions.addNewContactRequest());

  try {
    const { data } = await axios.post(
      `/contacts/${localId}.json?auth=${token}`,
      contact,
    );
    dispatch(
      contactsActions.addNewContactSuccess({ ...contact, id: data.name }),
    );
  } catch (error) {
    dispatch(contactsActions.addNewContactError(error.message));
  }
};

const getContacts = () => async (dispatch, getState) => {
  const localId = getState().auth.user.localId;
  const token = getState().auth.token.idToken;
  const isAuth = getState().auth.token.isAuth;

  dispatch(contactsActions.getContactsRequest());

  try {
    const { data } = await axios.get(`/contacts/${localId}.json?auth=${token}`);

    if (data) {
      const contacts = Object.keys(data).map(key => ({
        ...data[key],
        id: key,
      }));
      dispatch(contactsActions.getContactsSuccess(contacts));
    } else dispatch(contactsActions.getContactsSuccess());
  } catch (error) {
    if (isAuth && error.message === 'Request failed with status code 401') {
      dispatch(refreshTokenOperation());
    } else dispatch(contactsActions.getContactsError(error.message));
  }
};

const deleteContact = id => async (dispatch, getState) => {
  const localId = getState().auth.user.localId;
  const token = getState().auth.token.idToken;
  dispatch(contactsActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${localId}/${id}.json?auth=${token}`);

    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

const editContact = newContact => async (dispatch, getState) => {
  const localId = getState().auth.user.localId;
  const token = getState().auth.token.idToken;
  dispatch(contactsActions.editContactRequest());

  try {
    const { data } = await axios.put(
      `/contacts/${localId}/${newContact.id}.json?auth=${token}`,
      newContact,
    );

    dispatch(contactsActions.editContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.editContactError(error.message));
  }
};

const contactsOperations = {
  addNewContact,
  getContacts,
  deleteContact,
  editContact,
};
export default contactsOperations;
