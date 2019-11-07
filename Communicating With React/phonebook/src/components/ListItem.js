import React from 'react'

const ListItem = ({name, number, deleteItem}) => {
    return (
        <li id="listItem" key={name}>
            {name} 
             {number}
             <button onClick={deleteItem}>Delete</button>
        </li>
    )
}

export default ListItem