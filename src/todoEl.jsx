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

export default function TodoEl({
  darkTheme,
  largeArr,
  asideTab,
  setTasksLength,
  setLargeArr,
  onClick,
}) {
  const date = new Date();
  function checkedEl(todoId, checkedStatus) {
    setLargeArr(
      largeArr.map((item) => {
        if (item.currDate === todoId) {
          return { ...item, checked: checkedStatus };
        } else {
          return item;
        }
      })
    );
  }

  function render() {
    let renderedArr;
    if (asideTab === "all") {
      renderedArr = largeArr.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
      setTasksLength(`${renderedArr.length} tasks`);
      return renderedArr.map(
        ({
          currDate,
          title,
          description,
          dueDate,
          priority,
          savedTab,
          checked,
        }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                checkedEl(currDate, e.target.checked);
              }}
              className="accent-blue-600 w-5 h-5"
            />
            <div className="flex flex-col justify-center items-center">
              <div className={`flex gap-4 p-2 items-center`}>
                <h2
                  className={`font-bold ${
                    darkTheme ? " !text-gray-300" : "!text-gray-900 "
                  }`}
                >
                  {title}
                </h2>
                <span
                  className={`${
                    priority === "low"
                      ? "!bg-green-200 !text-green-900"
                      : priority === "medium"
                      ? "!bg-orange-100 !text-orange-500"
                      : "bg-red-200 text-red-500"
                  } ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                >
                  {priority}
                </span>
              </div>

              <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
            </div>
            <button
              className="!bg-transparent text-red-500 !items-end"
              onClick={() =>
                setLargeArr(
                  largeArr.filter((myItem) => myItem.currDate !== currDate)
                )
              }
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        )
      );
    } else if (asideTab === "overdue") {
      renderedArr = largeArr.filter(
        ({ dueDate }) => differenceInDays(date, dueDate) >= 1
      );
      setTasksLength(`${renderedArr.length} tasks`);
      return renderedArr.map(
        ({
          currDate,
          title,
          description,
          dueDate,
          priority,
          savedTab,
          checked,
        }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <div className="flex flex-col justify-center items-center">
              <div className={`flex gap-4 p-2 items-center`}>
                <h2
                  className={`font-bold ${
                    darkTheme ? " !text-gray-300" : "!text-gray-900 "
                  }`}
                >
                  {title}
                </h2>
                <span
                  className={`${
                    priority === "low"
                      ? "!bg-green-200 !text-green-900"
                      : priority === "medium"
                      ? "!bg-orange-100 !text-orange-500"
                      : "bg-red-200 text-red-500"
                  } ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                >
                  {priority}
                </span>
              </div>

              <div className="text-red-500">
                {differenceInDays(date, dueDate)} days overdue!
              </div>
            </div>
            <button
              className="!bg-transparent text-red-500 !items-end"
              onClick={() =>
                setLargeArr(
                  largeArr.filter((myItem) => myItem.currDate !== currDate)
                )
              }
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        )
      );
    } else if (asideTab === "completed") {
      renderedArr = largeArr.filter(({ checked }) => checked === true);
      console.log(renderedArr);
      setTasksLength(`${renderedArr.length} tasks`);
      return renderedArr.map(
        ({
          currDate,
          title,
          description,
          dueDate,
          priority,
          savedTab,
          checked,
        }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <div className="!line-through flex flex-col justify-center items-center">
              <div className={`flex gap-4 p-2 items-center`}>
                <h2
                  className={`font-bold ${
                    darkTheme ? " !text-gray-300" : "!text-gray-900 "
                  }`}
                >
                  {title}
                </h2>
              </div>

              <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
            </div>
            <button
              className="!bg-transparent text-red-500 !items-end"
              onClick={() =>
                setLargeArr(
                  largeArr.filter((myItem) => myItem.currDate !== currDate)
                )
              }
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        )
      );
    } else if (asideTab === "pending") {
      renderedArr = largeArr.filter(({ checked }) => checked === false);
      console.log(renderedArr);
      setTasksLength(`${renderedArr.length} tasks`);
      return renderedArr.map(
        ({
          currDate,
          title,
          description,
          dueDate,
          priority,
          savedTab,
          checked,
        }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <div className="flex flex-col justify-center items-center">
              <div className={`flex gap-4 p-2 items-center`}>
                <h2
                  className={`font-bold ${
                    darkTheme ? " !text-gray-300" : "!text-gray-900 "
                  }`}
                >
                  {title}
                </h2>
              </div>

              <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
            </div>
            <button
              className="!bg-transparent text-red-500 !items-end"
              onClick={() =>
                setLargeArr(
                  largeArr.filter((myItem) => myItem.currDate !== currDate)
                )
              }
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </li>
        )
      );
    } else {
      renderedArr = largeArr
        .sort((a, b) => compareAsc(a.dueDate, b.dueDate))
        .filter(({ savedTab }) => savedTab === asideTab);
      setTasksLength(`${renderedArr.length} tasks`);
      return renderedArr.map(
        ({
          currDate,
          title,
          description,
          dueDate,
          priority,
          savedTab,
          checked,
        }) => (
          <li className="w-full">
            <button
              className={`flex justify-center items-center gap-3 p-4 ${
                darkTheme
                  ? "!bg-gray-900 !text-gray-200"
                  : "!text-gray-900 !bg-gray-200"
              }  rounded shadow hover:shadow-md transition w-full`}
              // onClick={onClick}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  checkedEl(currDate, e.target.checked);
                }}
                className="accent-blue-600 w-5 h-5"
              />
              <div className="flex flex-col justify-center items-center">
                <div className={`flex gap-4 p-2 items-center`}>
                  <h2
                    className={`font-bold ${
                      darkTheme ? " !text-gray-300" : "!text-gray-900 "
                    }`}
                  >
                    {title}
                  </h2>
                  <span
                    className={`${
                      priority === "low"
                        ? "!bg-green-200 !text-green-900"
                        : priority === "medium"
                        ? "!bg-orange-100 !text-orange-500"
                        : "bg-red-200 text-red-500"
                    } ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                  >
                    {priority}
                  </span>
                </div>

                <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
              </div>
              <button
                className="!bg-transparent text-red-500 !items-end"
                onClick={() =>
                  setLargeArr(
                    largeArr.filter((myItem) => myItem.currDate !== currDate)
                  )
                }
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </button>
          </li>
        )
      );
    }
  }
  return <>{render()}</>;
}
