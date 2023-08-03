// import { useState, useEffect } from "react";

import Phonebook from "./Components/Phonebook";
import Contacts from "./Components/Contacts";
// import { nanoid } from "nanoid";
import "./App.css";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   addContact,
//   deleteContact,
// } from "./Components/redux/phoneBook/reducer";

import { api } from "./Components/api/apiSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setContacts,
  deleteContact,
  addContact as addLocal,
} from "./Components/redux/phoneBook/reducer";
// import { updateViewModel } from "./Components/redux/viewModel/reducer";

function App() {
  const dispatch = useDispatch();
  // const selector = useSelector();
  // let contacts = [];

  const {
    data: contacts,
    // is1Loading,
    isError,
  } = api.endpoints.getContacts.useQuery();

  useEffect(() => {
    dispatch(setContacts(contacts));
  }, [contacts]);

  const [addContact] = api.endpoints.addContact.useMutation();
  const [deleteContactApi] = api.endpoints.deleteContact.useMutation();

  // useEffect(
  //   (isError) => {
  //     console.log("An error occured while fetching contacts: ", isError);
  //   },
  //   [isError]
  // );

  const handleContacts = async (newContact) => {
    try {
      await addContact(newContact).unwrap();
      // console.log("New Contact: " + JSON.stringify(newContact));
      dispatch(addLocal(newContact));
    } catch (error) {
      console.log("An error occurred while adding a contact: ", error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await deleteContactApi(id).unwrap();
      dispatch(deleteContact(id));
    } catch (error) {
      console.log("An error ocurred while deleting a contact: ", deleteContact);
    }
  };

  return (
    <div className="App">
      <Phonebook handleContacts={handleContacts} />
      <Contacts contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
