import TodoEl from "./todoEl.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function Checklist({ darkTheme, onChecklistClick }) {
  function me() {
    console.log("this");
  }
  return (
    <section>
      <div className="flex items-center justify-between mb-6 ">
        {" "}
        <h2 className=" sm:text-2xl text-xl font-bold text-blue-500">
          Checklists
        </h2>
        <span className="text-[0.7rem] sm:text-xl text-gray-500">2 tasks</span>
        <button
          onClick={onChecklistClick}
          className="bg-blue-600 sm:text-2xl text-sm text-white px-4 py-1.5 rounded hover:bg-blue-700 transition flex items-center  gap-2"
        >
          <span>
            <FontAwesomeIcon icon={faList} />
          </span>
          <span className="sm:text-sm text-[0.7rem]">Add Checklist</span>
        </button>
      </div>

      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
        <TodoEl darkTheme={darkTheme} />
      </ul>
    </section>
  );
}
