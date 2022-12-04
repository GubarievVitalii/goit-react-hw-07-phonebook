import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getItem, getFilter } from '../../redux/contactsSlice';
import s from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  const deteteContact = id => {
    dispatch(deleteContacts(id));
  };

  const filteredContacts = () => {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filterOne = filteredContacts();
  const listContacts = filterOne ? filterOne : contacts;
  return (
    <>
      <ul className={s.contactsList}>
        {listContacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span className={s.contact}>
              {name} - {number}
            </span>
            <button className={s.btn} onClick={() => deteteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;