import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from './../../store/selectors';
import { addContact } from 'store/operations';

export const ContactForm = () => {
  const contactsState = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    let name = e.target.name.value;
    let number = e.target.number.value;

    if (
      contactsState.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, number };

    dispatch(addContact(newContact));

    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Number</label>
      <input type="tel" name="number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};
