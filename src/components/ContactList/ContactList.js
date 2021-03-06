import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;

        return (
            <ul>
                {contacts.map(contact => {
                    const { name, id, number } = contact;
                    return (
                        <li key={id} className={s.item}>
                            <span className={s.decor}></span> {name}: {number}{' '}
                            <button
                                className={s.button}
                                type="button"
                                onClick={() => deleteContact(id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};
