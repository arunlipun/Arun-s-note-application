import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { Pencil, Trash2, Save, X } from "lucide-react"; // icons

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = () => {
    updateNote(note._id, editData);
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-5 flex flex-col">
      {isEditing ? (
        <>
          {/* Edit Mode */}
          <input
            type="text"
            className="border border-gray-600 rounded-lg p-2 w-full mb-3 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-gray-800 text-gray-100 placeholder-gray-400"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <textarea
            className="border border-gray-600 rounded-lg p-2 w-full mb-3 
                       focus:ring-2 focus:ring-blue-500 outline-none 
                       bg-gray-800 text-gray-100 placeholder-gray-400"
            rows="3"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
          />
          <div className="flex gap-3">
            <button
              onClick={handleUpdate}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              <Save size={16} /> Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              <X size={16} /> Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* View Mode */}
          <h2 className="text-xl font-semibold text-white">{note.title}</h2>
          <p className="text-gray-300 mt-2 flex-1">{note.content}</p>

          {/* Footer: date + actions */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <span>
              {new Date(note.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => deleteNote(note._id)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notecard;
