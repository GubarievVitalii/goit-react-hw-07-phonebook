import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/contactsSelector';
import { deleteContacts, getContacts } from '../../redux/contactsOperations';
import s from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const deteteContact = id => {
    dispatch(deleteContacts(id));
  };

useEffect(() => {dispatch(getContacts())}, [dispatch])

  return (
    <>
      <ul className={s.contactsList}>
        {filteredContacts && filteredContacts.map(({ id, name, number }) => (
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