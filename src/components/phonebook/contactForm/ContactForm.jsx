import React, { Component } from 'react';
import shortid from 'shortid';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { name, number } = this.state;
        const idName = shortid.generate();
        const idNumber = shortid.generate();

        return (
            <form onSubmit={this.onSubmitHandler}>
                <label htmlFor={idName} style={{ display: 'block' }}>
                    Name
                </label>
                <input
                    id={idName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    style={{ display: 'block' }}
                    value={name}
                    onChange={this.handleInputChange}
                />

                <label htmlFor={idNumber} style={{ display: 'block' }}>
                    Number
                </label>
                <input
                    id={idNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    style={{ display: 'block' }}
                    value={number}
                    onChange={this.handleInputChange}
                />

                <button type="submit">Add contact</button>
            </form>
        );
    }
}
