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
        const idContact = shortid.generate();

        this.setState(prevState => {
            const { contacts } = prevState;

            const isInContacts = contacts.some(
                ({ name }) => name === data.name
            );

            if (isInContacts) {
                alert(`${data.name} is already in contacts`);
                return;
            } else {
                contacts.push({
                    id: idContact,
                    name: data.name,
                    number: data.number,
                });

                return { contacts: [...contacts] };
            }
        });
    };

    handleFilterChange = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    handleDeleteClick = event => {
        this.setState(prevState => {
            const { contacts } = prevState;
            const newArr = [...contacts];
            const index = newArr.findIndex(
                contact => contact.name === event.target.name
            );
            newArr.splice(index, 1);
            return { contacts: newArr };
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
                    getFilteredContacts={this.getFilteredContacts}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        );
    }
}
