import { useState } from "react";
import { isFuture, isToday } from "date-fns";
export default function TodoModal({
  isClicked,
  tab,
  setIsClicked,
  setPriority,
  priority,
  setLargeArr,
  asideTab,
  largeArr,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  class ObjCreate {
    constructor(title, description, dueDate = "", priority = "") {
      this.currDate = new Date();
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.savedTab = asideTab;
      this.checked = false;
    }
  }
  function objectSaver(e, title, description, dueDate, priority) {
    e.preventDefault();

    if (
      title &&
      description &&
      (isFuture(dueDate) || isToday(dueDate)) &&
      priority &&
      largeArr.find((item) => item.title === title) === undefined
    ) {
      let myObject = new ObjCreate(title, description, dueDate, priority);
      setLargeArr((prev) => [...prev, myObject]);
      setTitle("");
      setDescription("");
      setPriority("low");
      setDueDate("");
      setIsClicked(!isClicked);
    } else if (!(isFuture(dueDate) || isToday(dueDate))) {
      alert("Fill a current or future date!");
    } else {
      alert("Fill all the fields with unique values!");
    }
    return;
  }
  return (
    <div
      className="modal-container"
      style={{ display: isClicked ? "block" : "none" }}
    >
      <div className="modalBg z-100 bg-[#525151b7]"></div>
      <div className="modal rounded-2xl z-200 bg-gray-300">
        <h1 className="text-gray-900 !text-2xl sm:!text-4xl font-bold mb-1">
          {`${tab === "todos" ? "My Next To-do" : "New Note"}`}
        </h1>
        <h2 className="text-red-700 font-medium">
          Kindly fill in the information below:
        </h2>
        <form
          onSubmit={(e) => {
            objectSaver(e, title, description, dueDate, priority);
            // clearAllInputs();
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
          {tab === "todos" && (
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
          )}
          <div className="flex justify-end gap-5 mt-5">
            <button
              className="!text-xl !bg-transparent !p-0 text-red-600"
              onClick={() => setIsClicked(!isClicked)}
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
  );
}
