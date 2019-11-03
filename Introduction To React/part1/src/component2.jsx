import React, { useState } from 'react';
import ReactDOM from 'react-dom'

const App = (props) => {
    const [counter,
        setCounter] = useState(0)

    //setTimeout(() => setCounter(counter + 1), 1000);
    const handleClick = () => {
        console.log('clicked');
    }

    const incrementByOne = () => {
        setCounter(counter + 1)
    }

    const setToZero = () => {
        setCounter(0)
    }

    const setToValue = (value) => {
        setCounter(value)
    }

    // const setToValue = (value) => {
    //     return () => {
    //         setCounter(value)
    //     }
    // }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => setToValue(counter + 1)}>Increment</button>
            <button onClick={() => setToValue(0)}>Reset</button>
            {/* <button onClick={setToValue(counter+1)}>Increment</button>
            <button onClick={setToValue(0)}>Reset</button> */}
            {/* <button onClick={incrementByOne}>Increment</button> */}
            {/* <button onClick={setToZero}>Reset</button> */}
            {counter}
        </div>
    )
}

ReactDOM.render(< App />, document.getElementById('root'))
