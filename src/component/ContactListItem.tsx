interface ContactItemProps {
  name: string;
  number: string;
  onClickRemove: () => void;
}
const ContactListItem: React.FC<ContactItemProps> = ({
  name,
  number,
  onClickRemove,
}) => {
  return (
    <li className="contact-list-item">
      <span className="contact-list-item__name">
        {name} : {number}
      </span>
      <button className="contact-list-item__remove" onClick={onClickRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
