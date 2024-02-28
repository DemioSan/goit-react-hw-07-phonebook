import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import {
  contactsErrorSelector,
  contactsLoadingSelector,
  contactsSelector,
  filterSelector,
} from 'store/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filterState = useSelector(filterSelector);
  const contacts = useSelector(contactsSelector);

  const isLoading = useSelector(contactsLoadingSelector);
  const error = useSelector(contactsErrorSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.length
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterState.toLowerCase())
      )
    : [];

  return isLoading ? (
    <b>Loading contacts...</b>
  ) : error ? (
    <b>Error has occured: {error}</b>
  ) : (
    <ul>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            dataid={contact.id}
          />
        ))
      ) : (
        <p>No contacts saved</p>
      )}
    </ul>
  );
};
