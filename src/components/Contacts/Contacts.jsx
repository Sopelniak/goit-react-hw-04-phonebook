import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

function Contacts({ contacts, filterContacts, handleClickDelete }) {
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

export { Contacts };

Contacts.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
