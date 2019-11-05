import React from 'react'

const AddItem = (props) => {
  let {
    formSubmit,
    onNameInputChange,
    onNumberInputChange,
    newName,
    newNumber
  } = props;

  return (
    <div id="addItemForm">
      <h4>Add a new Entry:</h4>
      <form onSubmit={formSubmit}>
        Name:
        <input value={newName} onChange={onNameInputChange} />
        Number:
        <input value={newNumber} onChange={onNumberInputChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem