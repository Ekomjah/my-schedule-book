import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faAlarmClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Aside({ tab, darkTheme }) {
  return (
    <aside
      className={`${
        darkTheme ? "!bg-gray-900" : "bg-gray-200"
      } flex flex-col max-w-xs p-6 md:relative z-0 fixed left-0 top-19 min-h-[calc(100vh-70px)]`}
    >
      <div className="mb-6 flex gap-3 justify-center items-center">
        <input
          className="flex-2 p-2 rounded border bg-gray-100 text-red-950"
          placeholder={tab === "todos" ? "Quick add to-do" : "Quick add note"}
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
          Add
        </button>
      </div>
      <div className="flex flex-col gap-10">
        <ul className="space-y-1 flex flex-col items-start w-full">
          <div className="font-semibold text-gray-700 mb-2">Filters</div>
          <li className="w-full">
            <button className="text-sm text-gray-100 flex justify-center gap-4 hover:text-blue-600 !bg-gray-800 w-full">
              <span>
                <FontAwesomeIcon icon={faInbox} style={{ color: "white" }} />
              </span>
              <span>All</span>
            </button>
          </li>
          <li className="w-full">
            <button className="flex justify-center gap-4 text-sm text-gray-100 hover:text-blue-600 !bg-gray-800 w-full">
              <span>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00f004" }} />
              </span>
              <span>Completed</span>
            </button>
          </li>
          <li className="w-full">
            <button className="flex justify-center gap-4 text-sm text-gray-100 hover:text-blue-600 !bg-gray-800 w-full">
              <span>
                <FontAwesomeIcon
                  icon={faAlarmClock}
                  style={{ color: "orange" }}
                />
              </span>
              <span>Pending</span>
            </button>
          </li>
          <li className="w-full">
            <button className="flex justify-center gap-4 text-sm text-red-600 hover:text-red-50 !bg-gray-800 w-full">
              <span>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  style={{ color: "red" }}
                />
              </span>
              <span>Overdue</span>
            </button>
          </li>
        </ul>
        <div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-gray-700 mb-2">Project</div>
            <div className="flex gap-2 items-start">
              <div className="text-red-500 text-xl cursor-pointer">
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div className="text-green-500 text-xl cursor-pointer">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <ul className="space-y-1 flex flex-col items-start w-full">
            <li className="w-full">
              <button className="text-sm text-gray-50 hover:text-blue-600 !bg-gray-800 w-full">
                Main
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
