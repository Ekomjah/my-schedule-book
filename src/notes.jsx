import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import NotesEl from "./notesEl";
import { useState } from "react";

export default function Notes({ darkTheme, onClick, notesArr, setNotesArr }) {
  const [isClicked, setIsClicked] = useState(false);
  const [myDesc, setMyDesc] = useState("");
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-500">Notes</h2>
        <div className="flex gap-[10px] items-center">
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="bg-blue-600 text-white px-4 py-1.5 rounded flex gap-2 hover:bg-blue-700 transition"
          >
            <span>
              <FontAwesomeIcon icon={faPencil} />
            </span>
            <span>Quick Jots</span>
          </button>
          <button
            onClick={onClick}
            className="!bg-blue-400 !rounded-3xl !text-black !px-3 !py-4 !fixed !bottom-10 !right-8 hover:bg-blue-700 flex  items-center gap-2 transition"
          >
            <span>
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </span>
          </button>
        </div>
      </div>

      <div
        className="flex justify-end gap-3 items-center mb-4"
        style={{ display: !isClicked && "none" }}
      >
        <textarea
          value={myDesc}
          onChange={(e) => setMyDesc(e.target.value)}
          className={`${
            darkTheme
              ? "bg-gray-50 text-gray-700"
              : "bg-gray-300 border-1  border-gray-700 text-white"
          } rounded-[10px]  w-full p-2 max-h-[150px]`}
          type="text"
          placeholder="Quick Jot?"
        />
        <button
          onClick={() => setIsClicked(!isClicked)}
          className="!bg-red-500"
        >
          Remove
        </button>
        <button
          className="bg-black"
          onClick={() => {
            setNotesArr((prev) => [
              ...prev,
              {
                currDate: new Date(),
                title: "",
                description: myDesc,
              },
            ]);
            setMyDesc("");
            setIsClicked(!isClicked);
          }}
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NotesEl
          darkTheme={darkTheme}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
        />
      </div>
    </section>
  );
}
