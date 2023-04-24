import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.init({
//   position: 'center-top',
//   timeout: 7000,
// });

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

      // if (this.state.contacts.length === 0) {
      //   localStorage.clear();
      // }
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (contact) => {

    this.setState(prevState => ({
      contacts: [{
        name: `${contact.name}`,
        number: `${contact.number}`,
        id: nanoid(3),
      },
      ...prevState.contacts],
    }))

  }


  handleDelete = id => {
    this.setState(prevState => {
      const newUsersList = prevState.contacts.filter(contact => contact.id !== id);
      return { contacts: newUsersList };
    });
  };


  render() {
    const { contacts, filter } = this.state;

    const newСontacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} contacts={contacts} ></ContactForm>

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter} />
        <ContactList contacts={newСontacts} onDelete={this.handleDelete} />
      </>
    );
  }
};