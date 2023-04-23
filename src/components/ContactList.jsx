import React from "react"
import ContactItem from "./ContactItem";
import { PropTypes } from 'prop-types';


const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    }).isRequired).isRequired,

    onDelete: PropTypes.func.isRequired,
}