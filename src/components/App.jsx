import { useState, useEffect } from "react";
import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./Contacts/ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { nanoid } from "nanoid";



const App = () => { 

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const [filter, setFilter] = useState(""); 

  const addNewContacts = (name, number) => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) alert(`${name} is already in contacts.`);
    else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts([...contacts, newContact]);
    };
  };

  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const onDeleteContact = id => {
    setContacts((prev) => prev.filter(contact => contact.id !== id));
  };

  
  useEffect(() => {
    const localStorageContact = localStorage.getItem("contacts");
    const parselocalStorageContact = JSON.parse(localStorageContact);

    if(parselocalStorageContact) setContacts(parselocalStorageContact);
  }, []);
  
  useEffect(() => {
    if (contacts.length > 0) localStorage.setItem("contacts", JSON.stringify(contacts)); 
  }, [contacts]);


  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm
        onSubmit={addNewContacts}
      />
      <h2>Contacts</h2>
      <ContactFilter
        value={filter}
        onChange={handleChange}
      />
      <ContactList
        arrContacts={getVisibleContacts()}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
};


export default App;
