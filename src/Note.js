import React from 'react';

const Note = props => {
    return(
        <div>
            <p>Enter note here</p>
            <textarea name="txtNotes" cols="35" wrap="soft" onChange={props.changed} value={props.current}></textarea>
            <br/>
            <button onClick={props.addNote}>Add</button>
        </div>
    )
}

export default Note;