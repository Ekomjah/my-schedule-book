import React, { useState, useEffect, useMemo } from "react";
import { format, differenceInDays, compareAsc } from "date-fns";
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
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [checked, setChecked] = useState("");
  const [savedTab, setSavedTab] = useState("");
  const [currDate, setCurrDate] = useState("");
  const [index, setIndex] = useState("");

  const today = new Date();

  const toDate = (d) => (d instanceof Date ? d : new Date(d));

  function checkedEl(todoId, checkedStatus) {
    setLargeArr(
      largeArr.map((item) =>
        item.currDate === todoId ? { ...item, checked: checkedStatus } : item
      )
    );
  }

  // compute renderedArr without mutating largeArr
  const renderedArr = useMemo(() => {
    if (asideTab === "all") {
      return [...largeArr].sort((a, b) =>
        compareAsc(toDate(a.dueDate), toDate(b.dueDate))
      );
    }

    if (asideTab === "overdue") {
      return largeArr.filter(
        ({ dueDate }) => differenceInDays(today, toDate(dueDate)) >= 1
      );
    }

    if (asideTab === "completed") {
      return largeArr.filter(({ checked }) => checked === true);
    }

    if (asideTab === "pending") {
      return largeArr.filter(({ checked }) => checked === false);
    }

    // fallback: savedTab
    return [...largeArr]
      .filter(({ savedTab }) => savedTab === asideTab)
      .sort((a, b) => compareAsc(toDate(a.dueDate), toDate(b.dueDate)));
  }, [largeArr, asideTab, today]);

  // update tasks length outside render
  useEffect(() => {
    if (setTasksLength) setTasksLength(`${renderedArr.length} tasks`);
  }, [renderedArr, setTasksLength]);

  const handleDelete = (currDate) => {
    setLargeArr(largeArr.filter((myItem) => myItem.currDate !== currDate));
  };

  if (!renderedArr.length) {
    return <div className="p-4 text-center text-sm">No tasks found.</div>;
  }

  function finder(
    title,
    description,
    dueDate,
    priority,
    checked,
    savedTab,
    currDate,
    index
  ) {
    setTitle(title);
    setDescription(description);
    setDueDate(toDate(dueDate));
    setPriority(priority);
    setChecked(checked);
    setSavedTab(savedTab);
    setCurrDate(currDate);
    setIndex(index);
  }

  return (
    <>
      {renderedArr.map(
        (
          {
            currDate,
            title,
            description,
            dueDate,
            priority,
            savedTab,
            checked,
          },
          index
        ) => {
          const due = toDate(dueDate);
          const overdueDays = differenceInDays(today, due);

          return (
            <li
              key={currDate}
              className={`flex justify-around items-center p-4 gap-2 ${
                darkTheme
                  ? "!bg-gray-900 !text-gray-200"
                  : "!text-gray-900 !bg-gray-200"
              }  rounded shadow hover:shadow-md transition w-full`}
            >
              {asideTab !== "overdue" &&
                asideTab !== "pending" &&
                asideTab !== "completed" && (
                  <input
                    type="checkbox"
                    checked={!!checked}
                    onChange={(e) => {
                      checkedEl(currDate, e.target.checked);
                    }}
                    className="accent-blue-600 w-5 h-5"
                  />
                )}

              <button
                type="button"
                onClick={() => {
                  finder(
                    title,
                    description,
                    dueDate,
                    priority,
                    checked,
                    savedTab,
                    currDate,
                    index
                  );
                  setShow(!show);
                  className = "!bg-amber-50";
                }}
              >
                <div
                  className="flex flex-col 
                 justify-center items-center cols"
                >
                  <div className={`flex justify-around gap-2 p-2 items-center`}>
                    <span
                      className={`flex-1 ${
                        priority === "low"
                          ? "!bg-green-200 !text-green-900"
                          : priority === "medium"
                          ? "!bg-orange-100 !text-orange-500"
                          : "bg-red-200 text-red-500"
                      } ml-auto text-xs bg-green-200 text-green-700 px-2 py-0.5 rounded`}
                    >
                      {priority}
                    </span>
                    <h2
                      className={`font-bold flex-10 ${
                        darkTheme ? " !text-gray-300" : "!text-gray-900 "
                      }`}
                    >
                      {title}
                    </h2>
                    <button
                      className="!bg-transparent text-red-500 !items-end"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent triggering the parent onClick
                        handleDelete(currDate);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>

                  <p>{description}</p>
                  {asideTab === "overdue" ? (
                    <div className="text-red-500">
                      {overdueDays} days overdue!
                    </div>
                  ) : asideTab === "completed" ? (
                    <div className="!line-through">
                      Due Date: {format(due, "dd MMMM yyyy")}
                    </div>
                  ) : (
                    <div>Due Date: {format(due, "dd MMMM yyyy")}</div>
                  )}
                </div>
              </button>
            </li>
          );
        }
      )}

      {show && (
        <div
          className="modal-container"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="modalBg z-100 bg-[#525151b7]"></div>
          <div className="modal rounded-2xl z-200 bg-gray-300">
            <h1 className="text-gray-900 !text-2xl sm:!text-4xl font-bold mb-1">
              Viewing Notes
            </h1>
            <h2 className="text-red-700 font-medium">
              Feel free to view and edit the information below:
            </h2>
            <form
              onSubmit={(e) => {
                setLargeArr((prev) =>
                  largeArr.map((item, i) => {
                    if (item.currDate === currDate) {
                      return {
                        currDate: currDate,
                        title: title,
                        description: description,
                        dueDate: dueDate,
                        priority: priority,
                        savedTab: savedTab,
                        checked: checked,
                      };
                    } else {
                      return item;
                    }
                  })
                );
                e.preventDefault();
                setShow(!show);
              }}
              className="flex flex-col gap-2 rounded-2xl p-3"
            >
              <label htmlFor="title" className="flex flex-col items-start">
                <span>Title:</span>
                <input
                  className="p-2 w-full border-2 border-blue-400 rounded-xl !text-white  bg-transparent"
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>
              <label
                htmlFor="description"
                className="flex flex-col items-start max-w-full"
              >
                <span>Description:</span>
                <textarea
                  name=""
                  id=""
                  className="p-2 w-full border-2 border-blue-400 rounded-xl !text-white  bg-transparent"
                  placeholder="This is all about me..."
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
              <div className="flex flex-col gap-2 rounded-2xl p-3 !w-full">
                <label
                  htmlFor="dueDate"
                  className="flex flex-col items-start max-w-full "
                >
                  <span>Due Date:</span>
                  <input
                    type="date"
                    id="dueDate"
                    className="p-2 w-full border-2 border-blue-400 rounded-xl !text-white  bg-transparent"
                    placeholder="dueDate"
                    value={dueDate}
                    required
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </label>

                <label className="flex flex-col items-start max-w-full">
                  <span>Select Task Priority:</span>
                  <select
                    required
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="p-2 w-full border-2 border-blue-400 rounded-xl !text-white  bg-transparent"
                  >
                    <option value="">Choose Priority:</option>
                    <option value="low" className="text-green-500 bg-gray-700">
                      Low
                    </option>
                    <option
                      value="medium"
                      className="text-orange-500 bg-gray-700"
                    >
                      Medium
                    </option>
                    <option value="high" className="text-red-700 bg-gray-700">
                      High
                    </option>
                  </select>
                </label>
              </div>
              <div className="flex justify-end gap-5 mt-5">
                <button
                  className="!text-xl !bg-transparent !p-0 text-red-600"
                  onClick={() => setShow(!show)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="!text-xl !bg-transparent !p-0 text-blue-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
