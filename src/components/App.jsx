import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './Form/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  filterContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleClickDelete = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== e.target.id
        ),
      };
    });
  };

  componentDidMount() {
    try {
      const LSContacts = localStorage.getItem('contacts');
      if (LSContacts !== null) {
        this.setState(() => {
          return { contacts: JSON.parse(LSContacts) };
        });
      }
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm addContact={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter filter={filter} handleInput={this.handleInput} />
            <Contacts
              contacts={contacts}
              filterContacts={this.filterContacts}
              handleClickDelete={this.handleClickDelete}
            />
          </Section>
        )}
      </>
    );
  }
}

export { App };
