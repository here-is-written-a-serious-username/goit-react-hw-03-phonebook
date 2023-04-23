import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
    position: 'center-top',
    timeout: 7000,
});

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();

        const { contacts } = this.props;
        let duplicate = contacts.filter(contact => contact.name === this.state.name).length;

        if (duplicate) {
            Notify.failure(`${this.state.name}  is already in contacts`);
        } else {
            this.props.onSubmit(this.state);
            this.setState({ name: '', number: '' });
        }
    }

    render() {
        const { name, number } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>

                    <label >
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleChange}
                            value={name}
                        />
                    </label>

                    <label>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleChange}
                            value={number}
                        />
                    </label>

                    <button type='submit'>Add Contact</button>

                </form>
            </>
        )
    }
}


export default ContactForm;


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    }))
}