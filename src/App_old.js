// import { useState, useEffect } from "react";

import Phonebook from "./Components/Phonebook";
import Contacts from "./Components/Contacts";
import { nanoid } from "nanoid";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
} from "./Components/redux/phoneBook/reducer";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.phoneBook.contacts);

  // const [contacts, setContacts] = useState({
  //   contacts: [],
  //   filter: "",
  //   name: "",
  //   number: "",
  // });

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   // setContacts(storedContacts);
  //   if (storedContacts && storedContacts.length !== 0) {
  //     setContacts((prev) => ({
  //       ...prev,
  //       contacts: storedContacts,
  //     }));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts.contacts));
  //   // localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const handleContacts = (newContact) => {
    const id = nanoid();
    const contactWithId = {
      ...newContact,
      id,
    };

    const { name } = newContact;
    const isContactAlreadyExist = contacts.some(
      (contact) => contact.name === name
    );

    if (isContactAlreadyExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    console.log("OP");
    dispatch(addContact(contactWithId));
  };

  // const handleContacts = (newContact) => {
  //   const id = nanoid();
  //   console.log(newContact, "newContact");
  //   const contactWithId = { ...newContact, id };
  //   console.log(contactWithId, "contactWithId");

  //   const { name } = newContact;
  //   const isContactAlreadyExist = contacts.contacts.some(
  //     (contact) => contact.name === name
  //   );
  //   if (isContactAlreadyExist) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   setContacts((prev) => ({
  //     ...prev,
  //     contacts: [...prev.contacts, contactWithId],
  //   }));
  // };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // const handleDeleteContact = (id) => {
  //   setContacts((prev) => ({
  //     ...prev,
  //     contacts: prev.contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  return (
    <div className="App">
      <Phonebook handleContacts={handleContacts} />
      <Contacts contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
