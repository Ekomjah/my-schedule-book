import { useState } from "react";
import "./App.css";
import Aside from "./aside.jsx";
import Todo from "./todo.jsx";
import Notes from "./notes.jsx";
import HamburgerIcon from "./hamburgerIcon.jsx";

export default function App() {
  const [tab, setTab] = useState("todos");
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        {tab === "todos" && (
          <HamburgerIcon onClick={() => setOpen(!open)} isOpen={open} />
        )}
        <div className="text-lg font-semibold text-red-500">DoNoTo</div>
        <nav className="space-x-2">
          <button
            className={`px-3 py-1 rounded transition-colors duration-200 ${
              tab === "todos"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("todos")}
          >
            To-Dos
          </button>
          <button
            className={`px-3 py-1 rounded transition-colors duration-200 ${
              tab === "notes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("notes")}
          >
            Notes
          </button>
        </nav>
      </header>
      <div className="flex">
        {tab === "todos" && open && <Aside tab={tab} />}
        <main className="flex-1 p-8">
          {tab === "todos" ? <Todo /> : <Notes />}
        </main>
      </div>
    </div>
  );
}
