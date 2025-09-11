import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faAlarmClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function Aside({ tab, darkTheme, display, displayFn }) {
  const [liVal, setLiVal] = useState(["Main"]);
  const [inputVal, setInputVal] = useState("");
  function addLi(item) {
    if (item) {
      setLiVal((prev) => [...prev, item]);
      setInputVal("");
    } else {
      alert("Input a project name!");
    }
  }
  return (
    <aside
      className={`${
        darkTheme ? "!bg-gray-900" : "bg-gray-200"
      } overflow-y-auto md:overflow-y-hidden flex flex-col md:relative md:min-h-[calc(100vh-70px)] md:h-auto max-w-xs p-6 z-0 fixed left-0 top-19 h-[calc(100vh-70px)]`}
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
                <FontAwesomeIcon icon={faAlarmClock} />
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
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-gray-700 mb-2">Project</div>
            <div className="flex gap-2 items-start">
              <div className="text-red-500 text-xl cursor-pointer">
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <button
                onClick={displayFn}
                className="text-green-500 text-xl cursor-pointer"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <ul className="space-y-1 flex flex-col items-start w-full">
            {liVal.map((item) => (
              <li className="w-full">
                <button className="text-sm text-gray-50 hover:text-blue-600 !bg-gray-800 w-full">
                  {item}
                </button>
              </li>
            ))}
            <div
              className="flex flex-col justify-center items-center w-full mt-5"
              style={{ display: !display && "none" }}
            >
              <input
                type="text"
                placeholder="New Project"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                name=""
                id=""
                className="w-full bg-gray-300 text-black p-2 rounded border"
              />
              <div className="flex gap-5 mt-3">
                <button
                  className="p-3 !bg-gray-800 text-red-600"
                  onClick={displayFn}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-3 text-green-500 !bg-gray-800"
                  onClick={() => addLi(inputVal)}
                >
                  Save
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </aside>
  );
}
