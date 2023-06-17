import { combineReducers } from "redux";


const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: "",
}


const contactsReducer = (state=initialState, action) => {
    if (action.type === 'contact/add') {
        return { ...state, contacts: [...state.contacts, action.payload] }
    };

    if (action.type === 'contact/delete') {
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
    };

    return state;
};


const filterReducer = (state=initialState, action) => {
    if (action.type === 'filter/add') {
        return { ...state, filter: action.payload }
    };
    return state;
};


export const reducer = combineReducers({
    contact: contactsReducer,
    filter: filterReducer
}
);


