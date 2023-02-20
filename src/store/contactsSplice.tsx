import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  id: string;
  name: string;
  number: string;
};

type ContactsState = {
  contacts: Contact[];
};

const initialState: ContactsState = {
  contacts: [],
};

export const ContactSplice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.splice(0, 0, action.payload);
    },

    handleRemove(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, handleRemove } = ContactSplice.actions;
