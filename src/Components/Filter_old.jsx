// import { useState } from "react";

// const Filter = ({ contacts }) => {
//   const [search, setSearch] = useState('');

//   const handleSearch = event => {
//     setSearch(event.target.value)
//   }

//   const filteredContacts = contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(search.toLowerCase());
//   })

//   return (
//     <div>
//       <h3>Find contacts by name</h3>
//       <div>
//         <label htmlFor="search">Find contacts by name:</label>
//         <input type="text" id="search" onChange={handleSearch} />
//       </div>
//     </div>
//   )
// }
// export default Filter;