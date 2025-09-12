import { useState } from "react";
export default function ChecklistModal({ isClicked, setIsClicked }) {
  const [checklistArr, setChecklistArr] = useState([
    <label
      htmlFor="description"
      className="flex bg-gray-500 gap-3 justify-between items-center p-2 rounded-xl max-w-full"
    >
      <input type="checkbox" />
      <textarea
        name=""
        id=""
        className="w-full px-1 border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
      ></textarea>
    </label>,
  ]);
  function addList(e) {
    e.preventDefault();
    setChecklistArr((prev) => [
      ...prev,
      <label
        htmlFor="description"
        className="flex bg-gray-500 gap-3 justify-between items-center p-2 rounded-xl max-w-full"
      >
        <input type="checkbox" />
        <textarea
          name=""
          id=""
          className="w-full px-1 border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
        ></textarea>
      </label>,
    ]);
  }
  return (
    <div
      className="modal-container"
      style={{ display: isClicked ? "block" : "none" }}
    >
      <div className="modalBg z-100 bg-[#000000]"></div>
      <div className="modal overflow-y-auto rounded-2xl z-200 bg-gray-300 h-[90vh]">
        <h1 className="text-gray-900 !text-2xl sm:!text-4xl font-bold mb-1">
          Add a Checklist Item
        </h1>
        <form className="flex flex-col gap-2 rounded-2xl p-3">
          <label htmlFor="title" className="flex flex-col items-start">
            <span>Title:</span>
            <input
              className="px-1 w-full border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
              type="text"
              id="title"
              placeholder="Title"
            />
          </label>
          <div className="flex justify-between items-center">
            <div>Add a checkbox</div>
            <button onClick={(e) => addList(e)}>+</button>
          </div>
          {checklistArr.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </form>
        <div className="flex justify-end gap-5 mt-5">
          <button
            className="p-3 bg-gray-700 text-red-600"
            onClick={() => setIsClicked(!isClicked)}
          >
            Cancel
          </button>
          <button type="submit" className="p-3 text-green-500 bg-gray-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
