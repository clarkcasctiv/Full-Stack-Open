import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = (props) => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    // const handleLeftClick = () => {
    //     const newClicks = {
    //         ...clicks,

    //         left: clicks.left + 1
    //         // right: clicks.right
    //     }

    //     setClicks(newClicks)
    // }

    const handleLeftClick = () => {
        setClicks({ ...clicks, left: clicks.left + 1 })
    }
    // const handleRightClick = () => {
    //     const newClicks = {
    //         ...clicks,
    //         // left: clicks.left
    //         right: clicks.right + 1
    //     }

    //     setClicks(newClicks)
    // }

    const handleRightClick = () => {
        setClicks({ ...clicks, right: clicks.right + 1 })
    }

    return (
        <div>
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>Left</button>
                {clicks.right}
                <button onClick={handleRightClick}>Right</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
