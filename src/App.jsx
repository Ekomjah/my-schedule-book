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
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [asideTab, setAsideTab] = useState("main");
  const [tasksLength, setTasksLength] = useState(200);
  const [largeArr, setLargeArr] = useState(() => {
    return JSON.parse(localStorage.getItem("to-doseing"))
      ? JSON.parse(localStorage.getItem("to-doseing"))
      : [];
  });
  const [notesArr, setNotesArr] = useState(() => {
    return JSON.parse(localStorage.getItem("noting"))
      ? JSON.parse(localStorage.getItem("noting"))
      : [];
  });
  const [priority, setPriority] = useState("low");
  const [isChecklistModalClicked, setIsChecklistModalClicked] = useState(false);
  const [liVal, setLiVal] = useState(() => {
    return JSON.parse(localStorage.getItem("As-project"))
      ? JSON.parse(localStorage.getItem("As-project"))
      : ["Main"];
  });
  const [inputVal, setInputVal] = useState("");
  const [display, setDisplay] = useState(false);
  const [tab, setTab] = useState("todos");
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [todoChecklistArr, setTodoChecklistArr] = useState([]);

  useEffect(() => {
    localStorage.setItem("As-project", JSON.stringify(liVal));
    localStorage.setItem("to-doseing", JSON.stringify(largeArr));
    localStorage.setItem("noting", JSON.stringify(notesArr));
  }, [liVal, largeArr, notesArr]);

  function removeItem(arr, item, index) {
    if (item !== "Main" && arr.length > 1) {
      setLargeArr(() =>
        largeArr.filter((arrayItem) => arrayItem.savedTab !== item)
      );
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
          ToDoNotes
        </div>
        <nav className="gap-2 space-x-2 flex sm:gap-6 items-center">
          <button
            className={`!text-xl md:!text-3xl !p-0 !bg-transparent rounded transition-colors duration-200 `}
            onClick={() => setTab("todos")}
          >
            <FontAwesomeIcon icon={faTableList} />
          </button>
          <button
            className={`!text-xl md:!text-3xl !p-0 !bg-transparent rounded  transition-colors duration-200`}
            onClick={() => setTab("notes")}
          >
            <FontAwesomeIcon icon={faNoteSticky} />
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
            setAsideTab={setAsideTab}
            asideTab={asideTab}
            largeArr={largeArr}
            setLargeArr={setLargeArr}
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
              largeArr={largeArr}
              asideTab={asideTab}
              setTasksLength={setTasksLength}
              tasksLength={tasksLength}
              setLargeArr={setLargeArr}
              todoChecklistArr={todoChecklistArr}
              setTodoChecklistArr={setTodoChecklistArr}
            />
          ) : (
            <Notes
              darkTheme={darkMode}
              onClick={() => setIsClicked(!isClicked)}
              notesArr={notesArr}
              setNotesArr={setNotesArr}
            />
          )}
        </main>
      </div>
      <TextModal
        isClicked={isClicked}
        tab={tab}
        setIsClicked={setIsClicked}
        setPriority={setPriority}
        priority={priority}
        setLargeArr={setLargeArr}
        asideTab={asideTab}
        largeArr={largeArr}
        notesArr={notesArr}
        setNotesArr={setNotesArr}
        todoChecklistArr={todoChecklistArr}
        setTodoChecklistArr={setTodoChecklistArr}
      />
    </div>
  );
}
