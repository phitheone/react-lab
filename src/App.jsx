import {useEffect, useState} from 'react';
import uuid from "react-uuid";
import './App.css';
import Sidebar from "./Sidebar";
import Main from "./Main";

//componentes

function App() {
  //code
  //const [contador, setContador] = useState(0);

  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Nota sin Título",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) =>{
    const updatedNotesArray = notes.map((note) =>{
      if(note.id===activeNote){
        return updatedNote;
      }

      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  //salida html
  return (
    <div className="App">
      
      <Sidebar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />

      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />

    </div>
    
    /*
    <div className="App">
      <button onClick={() => setContador((prevContador) => prevContador - 1)}>-</button>
      <h1>{contador}</h1>
      <button onClick={() => setContador((prevContador) => prevContador + 1)}>+</button>
    </div>
    */
  );
}

export default App;
