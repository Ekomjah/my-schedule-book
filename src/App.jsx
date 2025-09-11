import { useState } from "react";
import "./App.css";
import Aside from "./aside.jsx";
import Todo from "./todo.jsx";
import Notes from "./notes.jsx";
import HamburgerIcon from "./hamburgerIcon.jsx";

export default function App() {
  const [tab, setTab] = useState("todos");
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`min-h-screen w-full`}>
      <header
        className={`shadow p-4 fixed z-10 top-0 left-0 right-0 flex items-center justify-between ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {tab === "todos" && (
          <HamburgerIcon
            onClick={() => setOpen(!open)}
            isOpen={open}
            darkTheme={darkMode}
          />
        )}
        <div
          className={`text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-blue-800"
          }`}
        >
          DoNoTo
        </div>
        <nav className="space-x-2 flex gap-2 items-center">
          <button
            className={`sm:px-3 sm:py-1 rounded transition-colors duration-200 ${
              tab === "todos"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("todos")}
          >
            To-Dos
          </button>
          <button
            className={`sm:px-3 sm:py-1 rounded transition-colors duration-200 ${
              tab === "notes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("notes")}
          >
            Notes
          </button>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </nav>
      </header>
      <div className="flex">
        {tab === "todos" && open && (
          <Aside darkTheme={darkMode} tab={tab} open={open} />
        )}
        <main
          className={`flex-1 p-8 mt-15 ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          {tab === "todos" ? (
            <Todo darkTheme={darkMode} />
          ) : (
            <Notes darkTheme={darkMode} />
          )}
        </main>
      </div>
    </div>
  );
}
