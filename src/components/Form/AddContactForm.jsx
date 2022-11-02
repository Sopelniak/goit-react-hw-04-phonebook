import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.scss';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    const { name, number } = e.target.elements;
    e.preventDefault();
    this.props.addContact(name.value, number.value);
    this.reset();
  };

  reset = () => {
    this.setState(() => {
      return { name: '', number: '' };
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={s.form} onSubmit={this.onSubmit}>
          <label>
            <span>Name</span>

            <input
              onChange={this.handleInput}
              value={name}
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
              onChange={this.handleInput}
              value={number}
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
}

AddContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
