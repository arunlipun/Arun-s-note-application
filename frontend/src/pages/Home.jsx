import React, { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Notecard from "../components/Notecard";
import { Loader2, FileX } from "lucide-react";

const Home = () => {
  const { notes, loading } = useContext(NoteContext);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-blue-400">
        <Loader2 className="animate-spin w-10 h-10 mb-4" />
        <p className="text-lg font-medium">Loading your notes...</p>
      </div>
    );
  }

  if (!notes || notes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-400">
        <FileX className="w-12 h-12 mb-3 text-red-400" />
        <p className="text-lg text-red-400 font-medium">No Notes Available</p>
        <p className="text-sm text-gray-500 mt-1">
          Create your first note to get started 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Your Notes
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {notes.map((note, i) => (
          <div
            key={note._id}
            className="animate-fadeInUp"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Notecard note={note} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
