import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Createnote from "./pages/Createnote";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-10">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700/40 p-6 min-h-[70vh] transition-all duration-300 hover:shadow-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createnote />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
