import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';
import axios from 'axios';

axios.defaults.baseURL = 'https://648cbfdc8620b8bae7ed56b5.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { getState, rejectWithValue }) => {
    const existingContact = getState().contacts.items.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      Report.info('Info', 'Contact already exists.', 'Ok');
      return rejectWithValue('Contact already exists');
    }

    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const setFilterValue = createAction('contacts/setFilterValue');
