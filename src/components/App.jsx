import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const LSContacts = localStorage.getItem('contacts');
      if (LSContacts !== null) {
        setContacts(prev => [...prev, ...JSON.parse(LSContacts)]);
      }
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, newContact]);
    }
  };

  const handleInputFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleClickDelete = e => {
    setContacts(prev => prev.filter(contact => contact.id !== e.target.id));
  };

  return (
    <>
      <Section title="Phonebook">
        <AddContactForm addContact={addContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter filter={filter} handleInput={handleInputFilter} />
          <Contacts
            contacts={contacts}
            filterContacts={filterContacts}
            handleClickDelete={handleClickDelete}
          />
        </Section>
      )}
    </>
  );
}

export { App };
