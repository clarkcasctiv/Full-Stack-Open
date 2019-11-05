import React, {useState} from 'react';
import Note from './components/note';
const App = (props) => {

  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState('a new note')

  const [showAll, setShowAll] = useState(true)

  const rows = () => noteToShow.map(note=> <Note key={note.id} note={note}/>)

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (e) => {

    e.preventDefault()
    console.log("Button Clicked", e.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length +1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
    
  }

  const handleNoteChange = (e) => {
console.log(e.target.value);
setNewNote(e.target.value)

  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => {setShowAll(!showAll)}}>Show {showAll ? 'important' : 'all'}</button>

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
