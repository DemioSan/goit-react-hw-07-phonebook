// import axios from 'axios';

// axios.defaults.baseURL =
//   'https://6595509704335332df8274aa.mockapi.io/contacts/';

// export async function fetchContacts() {
//   try {
//     const response = await axios.get('/');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching contacts:', error);
//     throw error;
//   }
// }

// export async function addContact(newContact) {
//   try {
//     const response = await axios.post('/', newContact);
//     return response.data;
//   } catch (error) {
//     console.error('Error adding contact:', error);
//     throw error;
//   }
// }

// export async function deleteContact(id) {
//   try {
//     await axios.delete(`/${id}`);
//     const updatedContacts = await axios.get('/');
//     return updatedContacts.data;
//   } catch (error) {
//     console.error('Error deleting contact:', error);
//     throw error;
//   }
// }
