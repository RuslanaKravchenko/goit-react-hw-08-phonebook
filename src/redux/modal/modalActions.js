import { createAction } from '@reduxjs/toolkit';

const showModal = createAction('modal/showModal');
const hideModal = createAction('modal/hideModal');

export { showModal, hideModal };
