import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    dispatch(addContact({ name, number })).then(() => {
      event.target.reset();
    });
  };

  return (
    <div className="section">
      <h1 className="section__title">Phonebook</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Z\u0400-\u04FF]+([\-'\s][a-zA-Z\u0400-\u04FF]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
          />
        </div>

        <div className="form__container">
          <label className="form__label" htmlFor="number">
            Number
          </label>
          <input
            className="form__input"
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
          />
        </div>

        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
