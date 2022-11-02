import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

export class Contacts extends Component {
  render() {
    const { contacts, filterContacts, handleClickDelete } = this.props;
    return (
      <>
        <ul>
          {filterContacts(contacts).map(contact => (
            <li className={s['contact-item']} key={contact.id}>
              <span className={s.name}>{contact.name}:</span>
              <div>
                <span className={s.number}>{contact.number}</span>
                <button
                  className={s['btn-delete']}
                  id={contact.id}
                  onClick={handleClickDelete}
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Contacts.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
