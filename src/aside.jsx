export default function Aside({tab}) {
  return (
    <aside className="flex flex-col flex-grow max-w-xs p-6 bg-gray-200 border-r min-h-[calc(100vh-64px)]">
      <div className="mb-6 flex gap-2">
        <input
          className="flex-2 p-2 rounded border bg-gray-100 text-red-950"
          placeholder={tab === "todos" ? "Quick add to-do" : "Quick add note"}
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
          Add
        </button>
      </div>
      <div>
        <div className="font-semibold text-gray-700 mb-2">Filters</div>
        <ul className="space-y-1 flex flex-col items-start w-full">
          <li className="w-full">
            <button className="text-sm text-gray-600 hover:text-blue-600 w-full">
              All
            </button>
          </li>
          <li className="w-full">
            <button className="text-sm text-gray-600 hover:text-blue-600 w-full">
              Completed
            </button>
          </li>
          <li className="w-full">
            <button className="text-sm text-gray-600 hover:text-blue-600 w-full">
              Pending
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
