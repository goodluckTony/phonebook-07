import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Contacts = ({ onDelete }) => {
  const [search, setSearch] = useState("");

  // const contacts = useSelector((state) => state.phoneBook.contacts);
  const contacts = useSelector((state) => state.rootReducer.contact.contacts);
  
  if (!contacts || contacts.length === 0) {
    return <div>No contacts found!</div>;
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
  
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="search">Find contacts by name:</label>
        <input type="text" id="search" onChange={handleSearch} />
      </div>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
