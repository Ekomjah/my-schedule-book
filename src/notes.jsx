import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import NotesEl from "./notesEl";

export default function Notes({ darkTheme }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-500">Notes</h2>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded flex gap-2 hover:bg-blue-700 transition">
            <span>
              <FontAwesomeIcon icon={faPencil} />
            </span>
            <span>Quick Jots</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded flex gap-2 hover:bg-blue-700 transition">
            <span>
              <FontAwesomeIcon icon={faNoteSticky} />
            </span>
            <span>Add Notes</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <NotesEl darkTheme={darkTheme} />
        <NotesEl darkTheme={darkTheme} />
        <NotesEl darkTheme={darkTheme} />
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
          <div className="font-semibold mb-2 text-lg">Another Note</div>
          <div className="text-gray-600 mb-3">Some more note content here.</div>
          <div className="flex justify-end text-xs text-gray-400">
            Edited 1 week ago
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
          <div className="font-semibold mb-2 text-lg">Ideas</div>
          <div className="text-gray-600 mb-3">
            Brainstorm your next project here.
          </div>
          <div className="flex justify-end text-xs text-gray-400">
            Edited just now
          </div>
        </div>
      </div>
    </section>
  );
}
