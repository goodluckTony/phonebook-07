import { useState } from "react";

const Phonebook = ({ handleContacts }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleNumber = (event) => {
    setNumber(event.target.value)
  }
  const handleSubmit = (event) => {

    event.preventDefault(); 
    handleContacts({ name, number });
    setName('');
    setNumber('');
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const name = formData.get('name');
  //   const number = formData.get('number');
  //   handleContacts({ name, number });
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        value={name}
        onChange={handleName}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(['\s-][a-zA-Zа-яА-Я]+)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name..."
          required 
        />
        <p>Phone</p>
        <input
         value={number}
         onChange={handleNumber}
          type="tel"
          name="number"
          // pattern="(\+?\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone..."
          required
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Phonebook;