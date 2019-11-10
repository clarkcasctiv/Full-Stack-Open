import React from 'react';
import ListItem from './ListItem'

const List = ({ list, deleteItem }) => {
  const itemsToRender = list.map(item => (
    <ListItem
      id={item.id}
      key={item.id}
      name={item.name}
      number={item.number}
      deleteItem={deleteItem}
    />
  ));
  return (
    <div id="listContainer">
      <h2>Numbers</h2>
      <ul id="list">{itemsToRender}</ul>
    </div>
  );
};
export default List;
