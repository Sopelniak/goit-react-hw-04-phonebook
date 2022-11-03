import PropTypes from 'prop-types';
import s from './Form.module.scss';
import { useState } from 'react';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

function AddContactForm({ addContact }) {
  const [contact, setContact] = useState(INITIAL_FORM_STATE);

  const handleInput = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = e => {
    const { name, number } = e.target.elements;
    e.preventDefault();
    addContact(name.value, number.value);
    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmit}>
        <label>
          <span>Name</span>

          <input
            onChange={handleInput}
            value={contact.name}
            placeholder="Andrew Sopelniak"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>

          <input
            onChange={handleInput}
            value={contact.number}
            placeholder="xxx-xx-xx"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export { AddContactForm };

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
