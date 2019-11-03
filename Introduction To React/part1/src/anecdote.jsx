import React, { useState } from "react"
import ReactDOM from "react-dom"

const anecdotes = [
    'If it hurts, do it more often', 'Adding manpower to a late software project makes it later!', 'The first 90 percent of the code accounts for the first 90 percent of the develo' +
    'pment time...The remaining 10 percent of the code accounts for the other 90 perc' +
    'ent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write c' +
    'ode that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if' +
    ' you write the code as cleverly as possible, you are, by definition, not smart e' +
    'nough to debug it.'
]

const Anecdote = ({ anecdote, vote }) => {
    return (
        <div>
            <p>{anecdote}</p>
            <p>has {vote} votes</p>
        </div>

    )
}
const App = ({ anecdotes }) => {
    const [selected,
        setSelected] = useState(0)
    const [votes,
        setVotes] = useState(Array(anecdotes.length).fill(0))

    const nextAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const voteAnecdote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)

    }

    const mostVotes = Math.max(...votes)
    const mostVoted = anecdotes[votes.indexOf(mostVotes)]
    return (
        <div>
            <h1>Anecdote of the day!</h1>
            <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
            <button onClick={voteAnecdote}>Vote</button>
            <button onClick={nextAnecdote}>Next Anecdote</button>

            <h1>Anecdote with most votes</h1>
            <Anecdote anecdote={mostVoted} vote={mostVotes} />

        </div>

    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />, document.getElementById('root'))