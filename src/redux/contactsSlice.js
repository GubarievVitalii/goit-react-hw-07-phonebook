import { createSlice } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initialContacts,
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
    сlearFilter(state) {
      state.filter = '';
    },
  },
});

export const { addContacts, deleteContacts, filterContacts, сlearFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;

export const getItem = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
