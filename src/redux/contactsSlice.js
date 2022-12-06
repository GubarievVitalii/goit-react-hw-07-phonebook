import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    сlearFilter(state) {
      state.filter = '';
    },
  },

  extraReducers: {
    [getContacts.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    },
    [getContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addContacts.pending]: state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContacts.pending]: state => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        el => el.id !== action.payload
      );
    },
    [deleteContacts.rejected]: (state, action) => {
      state.contacts.error = action.payload;
    },
  },
});

export const { filterContacts, сlearFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
