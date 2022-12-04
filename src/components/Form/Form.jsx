import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts, getItem } from '../../redux/contactsSlice';
import { useState } from 'react';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log("There isn't such case");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const newName = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (newName) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    dispatch(addContacts(newContact));
    reset();
  };

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label>
        <input
          className={s.input}
          value={name}
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          className={s.input}
          value={number}
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
