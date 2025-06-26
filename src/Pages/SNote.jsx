import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import NoteBox from '../Components/NoteBox';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';

const SNote = () => {
  const [notes, setNotes] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  const notesCollection = collection(db, 'notes');

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      const fetchedNotes = snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data().text
      }));
      setNotes(fetchedNotes);
    });

    return () => unsubscribe();
  }, []);

  const addNote = async () => {
    await addDoc(notesCollection, { text: "" });
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    setActiveMenu(null);
  };

  const updateNote = async (id, newText) => {
    const noteDoc = doc(db, 'notes', id);
    await updateDoc(noteDoc, { text: newText });
    setActiveMenu(null);
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 text-center w-full min-h-screen flex flex-col text-white overflow-y-scroll scrollbar-hide">
      

      <div className="absolute inset-0 -z-10 h-full min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="mt-6 sm:mt-8">
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Your Notes</h1>
        <h1 className='mt-2 sm:mt-3 text-xs sm:text-sm opacity-60'>Your Ideas Deserve Flexibility — Add, Edit, or Erase Anytime.</h1>
      </div>

      <div className="mt-4 sm:mt-6 w-full p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
         
          <div
            className="bg-gradient-to-br from-purple-700 to-indigo-700 h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] 
                      w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex items-center justify-center rounded-lg md:rounded-xl 
                      shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            onClick={addNote}
          >
            <FaPlus size={30} className="text-white" />
          </div>


          {notes.map((note) => (
            <NoteBox
              key={note.id}
              id={note.id}
              noteText={note.text}
              onDelete={deleteNote}
              onUpdate={updateNote}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              className="h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] 
                        w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SNote;