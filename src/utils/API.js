import axios from 'axios';

axios.defaults.baseURL = 'https://638cfb89eafd555746b37d83.mockapi.io/';

export const getContactsApi = () => {
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const deleteContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
