import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { PlusCircle } from "lucide-react";

function Noteform() {
  const { createNotes } = useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) return;
    createNotes(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-700/50">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-8">
        Create a New Note
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter title..."
          className="w-full px-4 py-3 rounded-xl bg-gray-800/70 text-white placeholder-gray-400 
                     border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 
                     outline-none transition"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />

        {/* Content Input */}
        <textarea
          placeholder="Write your note here..."
          className="w-full px-4 py-3 rounded-xl bg-gray-800/70 text-white placeholder-gray-400 
                     border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 
                     outline-none transition resize-none"
          rows="5"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 
                     hover:from-blue-700 hover:to-purple-700 transition text-white font-semibold py-3 rounded-xl shadow-lg"
        >
          <PlusCircle size={20} />
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Noteform;
