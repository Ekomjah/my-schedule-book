export default function ChecklistModal({ isClicked, setIsClicked }) {
  return (
    <div
      className="modal-container"
      style={{ display: isClicked ? "block" : "none" }}
    >
      <div className="modalBg z-100 bg-[#525151b7]"></div>
      <div className="modal rounded-2xl z-200 bg-gray-300">
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
          <div className="flex justify-around">
            <div>Add a checkbox</div>
            <button>+</button>
          </div>
          <label
            htmlFor="description"
            className="flex flex-col items-start max-w-full"
          >
            <input type="checkbox" />
            <textarea
              name=""
              id=""
              className="w-full px-1 border-0 border-b-[7px] border-b-gray-500 !text-gray-900  bg-gray-100 rounded-sm"
            ></textarea>
          </label>
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
