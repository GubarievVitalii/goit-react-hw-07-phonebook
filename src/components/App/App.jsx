import React from 'react';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <Form/>
      </div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Contacts</h2>
        <Filter/>
        <Contacts/>
      </div>
    </div>
  );
}
