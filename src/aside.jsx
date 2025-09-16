import {
  format,
  addDays,
  subDays,
  differenceInDays,
  compareAsc,
  compareDesc,
} from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons"; 
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAlarmClock } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Aside({
  tab,
  darkTheme,
  display,
  displayFn,
  liVal,
  setLiVal,
  inputVal,
  setInputVal,
  removeItemFromProjects,
  setAsideTab,
  asideTab,
  largeArr,
  setLargeArr,
}) {
  const [myVal, setMyVal] = useState("");
  function addLi(item) {
    if (
      item &&
      item !== "add" &&
      item !== "overdue" &&
      item !== "pending" &&
      item !== "all" &&
      item !== "Main" &&
      !liVal.includes(item)
    ) {
      setLiVal((prev) => [...prev, item]);
      setInputVal("");
    } else {
      alert("Enter a unique project name!");
    }
  }
  return (
    <aside
      className={`${
        darkTheme ? "!bg-gray-900" : "bg-gray-200"
      } overflow-y-auto md:overflow-y-hidden flex z-9 flex-col md:relative md:min-h-[calc(100vh-70px)] md:h-auto max-w-xs p-6 fixed left-0 top-19 h-[calc(100vh-70px)]`}
    >
      <div className="mb-3 flex gap-3 justify-center items-center">
        <input
          className="flex-2 p-2 rounded border bg-gray-100 text-red-950"
          placeholder={tab === "todos" ? "Quick add to-do" : "Quick add note"}
          value={myVal}
          onChange={(e) => setMyVal(e.target.value)}
        />
        <button
          onClick={() => {
            if (myVal) {
              setLargeArr((prev) => [
                ...prev,
                {
                  currDate: new Date(),
                  title: myVal,
                  description: "",
                  dueDate: addDays(new Date(), 5),
                  priority: "low",
                  savedTab: "main",
                  checked: false,
                },
              ]);
              setMyVal("");
            } else {
              alert("Fill in information for your quick todo!");
            }
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <ul className="space-y-1 flex flex-col items-start w-full">
          <div className="font-semibold text-red-500 mb-2">Filters</div>
          <li className="w-full">
            <button
              onClick={() => setAsideTab("all")}
              className="text-sm text-gray-100 flex justify-center gap-4 hover:text-blue-600 !bg-gray-800 w-full"
            >
              <span>
                <FontAwesomeIcon icon={faInbox} style={{ color: "white" }} />
              </span>
              <span>All</span>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setAsideTab("completed")}
              className="flex justify-center gap-4 text-sm text-gray-100 hover:text-blue-600 !bg-gray-800 w-full"
            >
              <span>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00f004" }} />
              </span>
              <span>Completed</span>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setAsideTab("pending")}
              className="flex justify-center gap-4 text-sm text-gray-100 hover:text-blue-600 !bg-gray-800 w-full"
            >
              <span>
                <FontAwesomeIcon icon={faAlarmClock} />
              </span>
              <span>Pending</span>
            </button>
          </li>
          <li className="w-full">
            <button
              onClick={() => setAsideTab("overdue")}
              className="flex justify-center gap-4 text-sm text-red-600 hover:text-red-50 !bg-gray-800 w-full"
            >
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
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-red-500 mb-2">Project</div>
            <button
              onClick={displayFn}
              className="text-green-500 text-xl cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <ul className="space-y-1 flex flex-col items-start w-full">
            {liVal.map((item, index) => (
              <li className="p-0.5 w-full flex flex-row !items-center !bg-gray-800 !rounded-xl">
                <a
                  onClick={(e) => e.preventDefault()}
                  href=""
                  className="text-sm text-gray-50 hover:text-blue-600 !bg-transparent  w-full"
                >
                  <button
                    onClick={() => setAsideTab(item.toLowerCase())}
                    className="text-sm text-gray-50 hover:text-blue-600 !bg-transparent  w-full"
                  >
                    {item}
                  </button>
                </a>
                <button
                  className="text-red-500 text-xl cursor-pointer"
                  onClick={() => removeItemFromProjects(liVal, item, index)}
                >
                  <FontAwesomeIcon icon={faMinus} />
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
                className={`p-2 w-full border-2 border-blue-400 rounded-xl ${
                  darkTheme ? "!text-[white]" : "!text-gray-900"
                } bg-transparent`}
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
                  onClick={() => {
                    addLi(inputVal);
                    displayFn();
                  }}
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
