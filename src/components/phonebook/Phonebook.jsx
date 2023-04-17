import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from 'components/index';
import { Filter } from 'components/index';
import { ContactList } from 'components/index';

export class Phonebook extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleSubmit = data => {
        const { contacts } = this.state;
        const isInContacts = contacts.some(
            ({ name }) => name.toLowerCase() === data.name.toLowerCase()
        );

        if (isInContacts) {
            alert(`${data.name} is already in contacts`);
            return;
        }

        this.setState(prevState => {
            const { contacts } = prevState;
            const newContact = {
                id: shortid.generate(),
                name: data.name,
                number: data.number,
            };

            return { contacts: [newContact, ...contacts]}
        });
    };

    handleFilterChange = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    handleDeleteClick = id => {
        this.setState(prevState => {
            return ({contacts: prevState.contacts.filter(contact => contact.id !== id)});
        });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;
        const normalizeFilter = filter.toLocaleLowerCase().trim();
        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(normalizeFilter)
        );
    };

    render() {
        const { filter } = this.state;
        const fiteredContacts = this.getFilteredContacts();

        return (
            <div>
                <h1>Phonebook</h1>

                <ContactForm onSubmit={this.handleSubmit} />

                <h2>Contacts</h2>

                <Filter
                    value={filter}
                    handleFilterChange={this.handleFilterChange}
                />

                <ContactList
                    fiteredContacts={fiteredContacts}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        );
    }
}
