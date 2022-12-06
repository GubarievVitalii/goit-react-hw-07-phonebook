import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const filteredContacts = items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);
