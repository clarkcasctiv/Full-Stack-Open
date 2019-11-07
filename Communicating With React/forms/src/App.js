import React, {useState, useEffect} from 'react';
import Note from './components/note';
import noteService from './services/index';
const App = (props) => {

    const [notes,
        setNotes] = useState([])

    const [newNote,
        setNewNote] = useState('a new note')

    const [showAll,
        setShowAll] = useState(true)

    const rows = () => noteToShow.map(note => <Note
        key={note.id}
        note={note}
        toggleImportance={() => toggleImportance(note.id)}/>)

    const noteToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    const hook = () => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes);
            })
    }

    useEffect(hook, []);

    const addNote = (e) => {

        e.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
                setNewNote('');
            })
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const toggleImportance = (id) => {
        const note = notes.find(n => n.id === id);
        const changedNote = {
            ...note,
            important: !note.important
        }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => (note.id !== id
                    ? note
                    : returnedNote)));
            })
            .catch(error => {
              alert(`Note ${note.content} was already deleted`)
              setNotes(notes.filter(n => n.id !== id))
            })
    }

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={() => {
                setShowAll(!showAll)
            }}>Show {showAll
                    ? 'important'
                    : 'all'}</button>

            <ul>
                {rows()}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;
