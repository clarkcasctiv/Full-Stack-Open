import React, { useState } from "react";
import ReactDOM from "react-dom"

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                This app is used by pressing the buttons
        </div>

        )
    }
    return (
        <div>
            Button press history {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => {
    const { onClick, text } = props
    return (
        <button onClick={onClick}>{text}</button>

    )
}

const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }


    return (
        <div>
            <div>
                {left}
                <Button onClick={handleLeftClick} text='Left' />
                {right}
                <Button onClick={handleRightClick} text='Right' />
                {/* <p>{allClicks.join(' ')}</p> */}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))