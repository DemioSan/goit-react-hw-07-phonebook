import { contactsReducer } from './slices/contacts/slice';
import { filterReducer } from './slices/filter/slice';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};
