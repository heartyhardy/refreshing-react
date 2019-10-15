import React, {useState} from 'react';
import Note from './Note';
import Notes from './Notes';
import './App.css';

const App = () => {

  const [noteState, setNoteState] = useState({
    notes:[]
  })

  const [currentNote, setCurrentNote] = useState({
    note:''
  })

  const AddNote = () => {
    if (currentNote.note.length > 0){
      let notesTmp = [...noteState.notes, currentNote.note];
      setNoteState({notes:notesTmp});
    }
  }

  const changeCurrentNote = event => {
    setCurrentNote({note:event.target.value});
  }

  return (
    <div className="App">
        <h1 className="title">Welcome to Notes!</h1>

        <Note addNote={AddNote} changed={changeCurrentNote} current={currentNote.note}/>

        <Notes notes={noteState.notes} />
    </div>
  );
}

export default App;
