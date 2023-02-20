import { useState } from "react";
import { addContact } from "../store/contactsSplice";

import { useAppDispatch } from "../store/hook";

const PhonebookComponent: React.FunctionComponent = () => {
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setNameInput(value);
        break;
      case "number":
        setNumberInput(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameInput && numberInput) {
      dispatch(addContact({ nameInput, numberInput }));
      setNameInput("");
      setNumberInput("");
      console.log(`submit`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="formPhoneBook">
        <label>
          Name:
          <input
            type="text"
            value={nameInput}
            required
            name="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={numberInput}
            name="number"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PhonebookComponent;
