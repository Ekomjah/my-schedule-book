import {
  format,
  addDays,
  subDays,
  differenceInDays,
  compareAsc,
} from "date-fns";

export default function TodoEl({ darkTheme, largeArr, asideTab }) {
  function render() {
    let renderedArr;
    if (asideTab === "all") {
      renderedArr = largeArr;
      return renderedArr.map(
        ({ currDate, title, description, dueDate, priority, currentTab }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
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
                    darkTheme ? " !text-green-500" : "!text-green-900 "
                  }  ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                >
                  {priority}
                </span>
              </div>

              <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
            </div>
          </li>
        )
      );
    }
    //else if (
    //   currentTab === "completed" ||
    //   currentTab === "pending" ||
    //   currentTab === "overdue"
    // ) {
    // }
    else {
      renderedArr = largeArr.filter(({ savedTab }) => savedTab === asideTab);
      return renderedArr.map(
        ({ currDate, title, description, dueDate, priority, currentTab }) => (
          <li
            className={`flex justify-center items-center gap-3 p-4 ${
              darkTheme
                ? "!bg-gray-900 !text-gray-200"
                : "!text-gray-900 !bg-gray-200"
            }  rounded shadow hover:shadow-md transition`}
          >
            <input type="checkbox" className="accent-blue-600 w-5 h-5" />
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
                    darkTheme ? " !text-green-500" : "!text-green-900 "
                  }  ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                >
                  {priority}
                </span>
              </div>

              <div>Due Date: {format(dueDate, "dd MMMM yyyy")}</div>
            </div>
          </li>
        )
      );
    }
  }
  const date = new Date();
  return (
    <>
      <li
        className={`flex justify-center items-center gap-3 p-4 ${
          darkTheme
            ? "!bg-gray-900 !text-gray-200"
            : "!text-gray-900 !bg-gray-200"
        }  rounded shadow hover:shadow-md transition`}
      >
        <input type="checkbox" className="accent-blue-600 w-5 h-5" />
        <div className="flex flex-col justify-center items-center">
          <div className={`flex gap-4 p-2 items-center`}>
            <h2
              className={`font-bold ${
                darkTheme ? " !text-gray-300" : "!text-gray-900 "
              }`}
            >
              Sample To-Do Item
            </h2>
            <span
              className={`${
                darkTheme ? " !text-green-500" : "!text-green-900 "
              }  ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
            >
              Low
            </span>
          </div>

          <div>Due Date: {format(date, "dd MMMM yyyy")}</div>
        </div>
      </li>
      {/* input starts here... */}
      {render()}
    </>
  );
}
