const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = initialContactsState, action) => {
  if (action.type === 'contact/add') {
    return [...state, action.payload];
  }

  if (action.type === 'contact/delete') {
    return state.filter((contact) => contact.id !== action.payload);
  }

  return state;
};
