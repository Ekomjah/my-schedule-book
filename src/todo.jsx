import TodoEl from "./todoEl.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoApp({
  onClick,
  darkTheme,
  largeArr,
  asideTab,
  setTasksLength,
  tasksLength,
  setLargeArr,
  todoChecklistArr,
  setTodoChecklistArr,
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6 ">
        {" "}
        <h2 className=" sm:text-2xl text-xl font-bold text-blue-500">To-Dos</h2>
        <span className="text-xl text-gray-500">{tasksLength}</span>
        <div className="flex gap-2 items-center">
          {asideTab !== "all" &&
            asideTab !== "completed" &&
            asideTab !== "pending" &&
            asideTab !== "overdue" && (
              <button
                onClick={onClick}
                className="!bg-blue-400 !rounded-3xl !text-black !px-3 !py-4 !fixed !bottom-10 !right-8 hover:!bg-blue-500 flex  items-center gap-2 transition-all duration-[2s] ease-in"
              >
                <span>
                  <FontAwesomeIcon icon={faPlus} size="2x" />
                </span>
              </button>
            )}
        </div>
      </div>

      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        <TodoEl
          darkTheme={darkTheme}
          largeArr={largeArr}
          asideTab={asideTab}
          setTasksLength={setTasksLength}
          setLargeArr={setLargeArr}
          onClick={onClick}
          todoChecklistArr={todoChecklistArr}
          setTodoChecklistArr={setTodoChecklistArr}
        />
      </ul>
    </section>
  );
}
