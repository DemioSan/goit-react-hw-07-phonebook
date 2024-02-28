import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://6595509704335332df8274aa.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/', newContact);
      return response.data;
    } catch (error) {
      console.error('Error adding contact:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/${id}`);
      const updatedContacts = await axios.get('/');
      return updatedContacts.data;
    } catch (error) {
      console.error('Error deleting contact:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
