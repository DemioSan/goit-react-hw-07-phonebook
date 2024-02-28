import { AppDiv } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <AppDiv className="main">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </AppDiv>
  );
};
