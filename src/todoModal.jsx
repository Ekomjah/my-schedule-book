import { useState } from "react";
export default function TodoModal({
  isClicked,
  tab,
  setIsClicked,
  setPriority,
  priority,
  setLargeArr,
  asideTab,
}) {
  class ObjCreate {
    constructor(title, description, dueDate = "", priority = "") {
      this.currDate = new Date();
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.savedTab = asideTab;
    }
  }
  function objectSaver(title, description, dueDate, priority) {
    let myObject = new ObjCreate(title, description, dueDate, priority);
    console.log(myObject);
    setLargeArr((prev) => [...prev, myObject]);
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  function clearAllInputs() {}
  {
    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
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
        <h2 className="text-red-500 font-medium">
          Kindly fill in the information below:
        </h2>
        <form className="flex flex-col gap-2 rounded-2xl p-3">
          <label htmlFor="title" className="flex flex-col items-start">
            <span>Title:</span>
            <input
              className="px-1 w-full border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              className="w-full px-1 border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
              placeholder="This is all about me..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          {tab === "todos" && (
            <div className="flex flex-col gap-2 rounded-2xl p-3 w-full">
              <label
                htmlFor="dueDate"
                className="flex flex-col items-start max-w-full "
              >
                <span>Due Date:</span>
                <input
                  type="date"
                  id="dueDate"
                  className="px-1 w-full  border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
                  placeholder="dueDate"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </label>

              <label className="flex flex-col items-start max-w-full">
                <span>Select Task Priority:</span>
                <select
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-1  border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
                >
                  <option value="">Choose Priority:</option>
                  <option value="low" className="text-green-500">
                    Low
                  </option>
                  <option value="medium" className="text-orange-500">
                    Medium
                  </option>
                  <option value="high" className="text-red-700">
                    High
                  </option>
                </select>
              </label>
            </div>
          )}
        </form>
        <div className="flex justify-end gap-5 mt-5">
          <button
            className="p-3 bg-gray-700 text-red-600"
            onClick={() => setIsClicked(!isClicked)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="p-3 text-green-500 bg-gray-700"
            onClick={() => {
              objectSaver(title, description, dueDate, priority);
              setIsClicked(!isClicked);
              clearAllInputs();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
