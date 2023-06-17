
import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReduser';
import { filterReducer } from './filter/filterReducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

