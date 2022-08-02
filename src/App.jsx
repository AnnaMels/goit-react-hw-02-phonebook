import { Component } from 'react';
import Form from './components/ContactForm';
import ContactList from './components/ContactsList';
import Filter from './components/Filter';
import { PhonebookTitle } from './components/App/App.styles';
import { ContactsTitle } from './components/App/App.styles';

export class App extends Component {
      state = {
        contacts: [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
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

