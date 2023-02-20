import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type Contact = {
  id: string;
  name: string;
  number: string;
};

type ContactsState = {
  contacts: Contact[];
  filter: string;
};

const initialState: ContactsState = {
  contacts: [],
  filter: "",
};

export const ContactSplice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(
      state,
      action: PayloadAction<{ nameInput: string; numberInput: string }>
    ) {
      const newContact = {
        id: nanoid(),
        name: action.payload.nameInput,
        number: action.payload.numberInput,
      };
      const contactInState = state.contacts.some(
        (item) =>
          item.name.toLowerCase() === action.payload.nameInput.toLowerCase()
      );
      if (contactInState) {
        alert(`${action.payload.nameInput} is already in contacts!`);
        return;
      }

      state.contacts.splice(0, 0, newContact);
    },

    handleChangeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },

    handleRemove(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      console.log(`klick`);
    },
  },
});

export const { addContact, handleRemove, handleChangeFilter } =
  ContactSplice.actions;
