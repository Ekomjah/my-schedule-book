import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
export default function TodoApp() {
  const myDate = new Date();
  let date = `${new Date().getDate()}-${
    myDate.getMonth() + 1
  }-${myDate.getFullYear()}`;
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        {" "}
        <h2 className="text-2xl font-bold text-blue-500">To-Dos</h2>
        <span className="text-sm text-gray-500">2 tasks</span>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 flex gap-2 transition">
            <span>
              <FontAwesomeIcon icon={faTableList} />
            </span>
            <span>Add To-Do</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition flex gap-2">
            <span>
              <FontAwesomeIcon icon={faList} />
            </span>
            <span>Add Checklist</span>
          </button>
        </div>
      </div>

      <ul className="space-y-4 grid grid-cols-4 gap-4 justify-center items-center">
        <li className="flex justify-center items-center gap-3 p-4 bg-white rounded shadow hover:shadow-md transition">
          <input type="checkbox" className="accent-blue-600 w-5 h-5" />
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 p-2">
              <h2 className="text-gray-800 font-bold">Sample To-Do Item</h2>
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Low
              </span>
            </div>

            <div className="text-black">Due Date: {date}</div>
          </div>
        </li>
        <li className="flex justify-center items-center gap-3 p-4 bg-white rounded shadow hover:shadow-md transition">
          <input type="checkbox" className="accent-blue-600 w-5 h-5" />
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 p-2">
              <h2 className="text-gray-800 font-bold">Sample To-Do Item</h2>
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Low
              </span>
            </div>

            <div className="text-black">Due Date: {date}</div>
          </div>
        </li>
        <li className="flex justify-center items-center gap-3 p-4 bg-white rounded shadow hover:shadow-md transition">
          <input type="checkbox" className="accent-blue-600 w-5 h-5" />
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 p-2">
              <h2 className="text-gray-800 font-bold">Sample To-Do Item</h2>
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Low
              </span>
            </div>

            <div className="text-black">Due Date: {date}</div>
          </div>
        </li>
        <li className="flex justify-center items-center gap-3 p-4 bg-white rounded shadow hover:shadow-md transition">
          <input type="checkbox" className="accent-blue-600 w-5 h-5" />
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-4 p-2">
              <h2 className="text-gray-800 font-bold">Sample To-Do Item</h2>
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Low
              </span>
            </div>

            <div className="text-black">Due Date: {date}</div>
          </div>
        </li>
        <li className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-md transition opacity-60">
          <input type="checkbox" className="accent-blue-600 w-5 h-5" />
          <span className="text-gray-800 line-through">Another Task</span>
          <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
            Completed
          </span>
        </li>
      </ul>
      <div className="flex">
        <h2 className="text-2xl font-bold text-blue-500 justify-start">
          Completed!
        </h2>
      </div>
    </section>
  );
}
