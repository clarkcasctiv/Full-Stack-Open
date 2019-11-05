import React from 'react';

const Filter = ({ onChange, inputValue }) => {
    return (
        <div id="filterForm">
            <span>Filter Results:</span>
            <input onChange={onChange} value={inputValue}/>
        </div>
    )
}

export default Filter