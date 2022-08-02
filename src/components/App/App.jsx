import { Component } from 'react';
import Form from '../ContactForm';
import ContactList from '../ContactsList';
import Filter from '../Filter';
import { PhonebookTitle } from './App.styles';
import { ContactsTitle } from './App.styles';

export class App extends Component {
      state = {
        contacts: [],
        filter: ''
      }
  
      
  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  }

  deleteContact = (id) => {
    const contactsAfterDelete = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: contactsAfterDelete });
  }

  
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <Form addContact={this.addContact} contacts={contacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter handleFilter={this.handleFilter}/>
        <ContactList contacts={contacts} filter={filter} deleteHandler={this.deleteContact}/>
      </>
      
    )
  }
}

