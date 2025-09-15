// import { children, useEffect, useState } from "react";
// import { createContext } from "react";
// import React from 'react'
// import BACKEND_URL from "../api/url";
// export const NoteContext = createContext();
// export const NoteProvider = ({ children }) => {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   //fetach all notes
//   const getNotes = async () => {
//     setLoading(true);
//     try{
//       const response=await BACKEND_URL.get("/getNotes")
//       setNotes(response.data);

//     }catch(error){
//       console.error("Error fetching notes",error)

//     }
//   };
//  useEffect(()=>{
//   getNotes();
//  },[]);



//   //create note
//   const createNotes = async (note) => {

//     const res=await BACKEND_URL.post("/createnote",note)
//     setNotes([res.data,...notes])



//   };
//   //update notes
//   const updateNote = async (id, updateNotes) => {

//     const res=await BACKEND_URL.put(`/updateNotes/${id}`,updateNote)
//     setNotes(notes.map((note)=>(note._id===id ? res.data:note)))


//   };
//   //delete notes
//   const deleteNote = async (id) => {

//    await BACKEND_URL.delete(`/deleteNotes/${id}`)
//    setNotes(notes.filter((note)=>(note._id!==id)))


//   };

//   return (
//     <NoteContext.Provider
//       value={{ notes, loading, createNotes, updateNote, deleteNote }}
//     >
//       {children}
//     </NoteContext.Provider>
//   );
// };



import { useEffect, useState, createContext } from "react";
import React from "react";
import BACKEND_URL from "../api/url";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all notes
  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await BACKEND_URL.get("/getNotes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes", error);
    } finally {
      setLoading(false); // ✅ important
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  // Create note
  const createNotes = async (note) => {
    const res = await BACKEND_URL.post("/createnote", note);
    setNotes([res.data, ...notes]);
  };

  // Update note
  const updateNote = async (id, updatedNote) => {
    try {
      const res = await BACKEND_URL.put(`/updateNotes/${id}`, updatedNote);
      setNotes(
        notes.map((note) => (note._id === id ? res.data : note))
      );
    } catch (error) {
      console.error("Error updating note", error);
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    try {
      await BACKEND_URL.delete(`/deleteNotes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, loading, createNotes, updateNote, deleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

