import { useState, useEffect } from "react";
import "./App.css";
import Aside from "./aside.jsx";
import Todo from "./todo.jsx";
import Notes from "./notes.jsx";
import HamburgerIcon from "./hamburgerIcon.jsx";
import TextModal from "./todoModal.jsx";
import ChecklistModal from "./checklistModal.jsx";
import Checklist from "./checklist.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
class objCreate {
  constructor(title, description) {
    this.date = new Date();
    this.title = title;
    this.description = description;
  }
}
export default function App() {
  const [largeArr, setLargeArr] = useState([]);
  const [isChecklistModalClicked, setIsChecklistModalClicked] = useState(false);
  const [liVal, setLiVal] = useState(() => {
    return JSON.parse(localStorage.getItem("A-project"))
      ? JSON.parse(localStorage.getItem("A-project"))
      : ["Main"];
  });
  const [inputVal, setInputVal] = useState("");
  const [display, setDisplay] = useState(false);
  const [tab, setTab] = useState("todos");
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("A-project", JSON.stringify(liVal));
  }, [liVal]);

  function removeItem(arr, item, index) {
    if (item !== "Main" && arr.length > 1) {
      setLiVal(() =>
        liVal.filter((item, spillOverIndex) => spillOverIndex !== index)
      );
    } else {
      alert(`The Main Is A Must-Have!`);
    }
  }
  return (
    <div className={`min-h-screen w-full`}>
      <header
        className={`shadow p-4 fixed z-10 top-0 left-0 right-0 flex items-center justify-between ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {(tab === "todos" || tab === "checklist") && (
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
          ToDoNotes
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
            <FontAwesomeIcon icon={faTableList} />
          </button>
          <button
            className={`sm:px-3 sm:py-1 rounded text-white transition-colors duration-200 border-1 border-white ${
              tab === "notes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("checklist")}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            className={`sm:px-3 sm:py-1 rounded  transition-colors duration-200 border-1 border-white ${
              tab === "notes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
            onClick={() => setTab("notes")}
          >
            <FontAwesomeIcon icon={faPencil} />
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
        {(tab === "todos" || tab === "checklist") && open && (
          <Aside
            darkTheme={darkMode}
            tab={tab}
            display={display}
            displayFn={() => setDisplay(!display)}
            liVal={liVal}
            setLiVal={setLiVal}
            inputVal={inputVal}
            setInputVal={setInputVal}
            removeItemFromProjects={removeItem}
          />
        )}
        <main
          className={`flex-1 p-8 mt-15 ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          {tab === "todos" ? (
            <Todo
              onClick={() => setIsClicked(!isClicked)}
              darkTheme={darkMode}
            />
          ) : tab === "notes" ? (
            <Notes
              darkTheme={darkMode}
              onClick={() => setIsClicked(!isClicked)}
            />
          ) : (
            <Checklist
              darkTheme={darkMode}
              onChecklistClick={() =>
                setIsChecklistModalClicked(!isChecklistModalClicked)
              }
            />
          )}
        </main>
      </div>
      <TextModal isClicked={isClicked} tab={tab} setIsClicked={setIsClicked} />
      <ChecklistModal
        isClicked={isChecklistModalClicked}
        setIsClicked={setIsChecklistModalClicked}
      />
    </div>
  );
}
