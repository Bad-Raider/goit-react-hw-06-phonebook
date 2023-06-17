// import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";

const ContactList = () => {

    const {contacts, filter} = useSelector(state => state);
    // console.log('state', state);
    console.log('contacts', contacts);
    console.log('filter', filter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const arrContacts = getVisibleContacts();

    return (
        <>
            <ul className={css.list}>
                {arrContacts.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                    />
                ))}
            </ul>
        </>
    );
};

export default ContactList;

// ContactList.propTypes = {
//     arrContacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// };