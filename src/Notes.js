import React from 'react';

const Notes = props => {
    return(
            props.notes.map((e,i) => {
              return(
                <div key={i} className="notes">
                  <p>{e}</p>
                </div>
              )
            })
    )
}

export default Notes;