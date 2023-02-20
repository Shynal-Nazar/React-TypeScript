import { handleRemove } from "../store/contactsSplice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import ContactListItem from "./ContactListItem";

const ContactList: React.FC = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);
  const filter = useAppSelector((state) => state.filter.filter);
  const dispatch = useAppDispatch();

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className="list">
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClickRemove={() => dispatch(handleRemove(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
