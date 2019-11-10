import React from 'react'

const ListItem = ({ id, name, number, deleteItem }) => {
  return (
    <li id="listItem" key={id}>
      {name}
      {number}
      <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  );
};

export default ListItem