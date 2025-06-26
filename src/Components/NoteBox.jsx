import React, { useState } from 'react';

const NoteBox = ({ id, noteText, onDelete, onUpdate, activeMenu, setActiveMenu, className }) => {
  const [note, setNote] = useState(noteText || '');
  const [isSaved, setIsSaved] = useState(!!noteText);
  const [isEditing, setIsEditing] = useState(!noteText);

  const isMenuOpen = activeMenu === id;

  const handleSave = () => {
    if (note.trim() === '') return;
    onUpdate(id, note);
    setIsSaved(true);
    setIsEditing(false);
    setActiveMenu(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setActiveMenu(null);
  };

  const handleDelete = () => {
    onDelete(id);
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setActiveMenu(isMenuOpen ? null : id);
  };

  return (
    <div className={`relative p-2 sm:p-3 bg-white/5 rounded-lg md:rounded-xl shadow-lg hover:scale-105 transition duration-300 flex flex-col justify-between ${className}`}>
      
      {isSaved && !isEditing && (
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
          <button 
            onClick={toggleMenu} 
            className="text-white text-xl sm:text-2xl cursor-pointer hover:scale-125 transition"
            aria-label="Note options"
          >
            ⋮
          </button>

          {isMenuOpen && (
            <div 
              className="absolute right-0 mt-1 sm:mt-2 w-32 sm:w-36 backdrop-blur-md bg-white/10 text-white text-xs sm:text-sm rounded-lg md:rounded-xl shadow-xl z-10 transition-all duration-300"
            >
              <button 
                onClick={handleEdit} 
                className="px-3 sm:px-4 py-1 sm:py-2 hover:bg-white/20 w-full text-left rounded transition"
              >
                Edit
              </button>
              <button 
                onClick={handleDelete} 
                className="px-3 sm:px-4 py-1 sm:py-2 hover:bg-white/20 w-full text-left rounded transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}

      {!isSaved || isEditing ? (
        <>
          <textarea
            placeholder="Write your note..."
            className="resize-none text-xs sm:text-sm text-left p-1 sm:p-2 bg-transparent text-white placeholder-white/50 border border-white/10 rounded focus:outline-none h-full"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={50}
          />
          <button
            onClick={handleSave}
            disabled={note.trim().length === 0}
            className={`mt-1 sm:mt-2 px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded transition 
              ${
                note.trim().length === 0
                  ? 'bg-gray-600 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-500 hover:scale-105'
              }`}
          >
            Save
          </button>
        </>
      ) : (
        <p className="text-white text-xs sm:text-sm text-left whitespace-pre-line break-words overflow-y-auto max-h-full">
          {note}
        </p>
      )}
    </div>
  );
};

export default NoteBox;