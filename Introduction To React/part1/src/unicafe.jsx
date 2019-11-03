import React, { useState } from "react"
import ReactDOM from "react-dom"

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
)

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <th scope="row">{text}</th>
            <td>
                {value}
            </td>
        </tr>
    )
}
const Statistics = (props) => {
    const { good, bad, neutral } = props
    const sum = good + bad + neutral
    const avgScore = ((good - bad) / sum).toFixed(2)
    const posScore = ((good / sum) * 100).toFixed(2)

    if (sum === 0) {
        return (
            <p>
                <b>No Feedback Given</b>
            </p>
        )
    }

    return (
        <div>
            <p>
                <b>Statistics</b>
            </p>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="Total" value={sum} />
            <Statistic text="Average" value={avgScore} />
            <Statistic text="Positive Score" value={posScore} />
        </div>

    )
}
const App = (props) => {
    const [good,
        setGood] = useState(0)
    const [bad,
        setBad] = useState(0)
    const [neutral,
        setNeutral] = useState(0)

    const incrementGood = () => {
        setGood(good + 1)
    }

    const incrementBad = () => {
        setBad(bad + 1)
    }

    const incrementNeutral = () => {
        setNeutral(neutral + 1)
    }
    return (
        <div>
            <p>
                <b>Give Feedback</b>
            </p>
            <Button onClick={incrementGood} text='Good' />
            <Button onClick={incrementNeutral} text='Neutral' />
            <Button onClick={incrementBad} text='Bad' />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root'))
