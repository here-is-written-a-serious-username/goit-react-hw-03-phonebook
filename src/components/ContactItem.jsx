import React from "react"
import { PropTypes } from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
    const { id, name, number } = contact;

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <li>
            {name}
            {number}
            <button type="button" onClick={handleDelete} >Delete</button>
        </li>)
}

export default ContactItem;

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.node.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}