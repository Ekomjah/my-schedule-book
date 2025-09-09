export default function Notes() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-500">Notes</h2>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
          Add Note
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
          <div className="font-semibold mb-2 text-lg">Note Title</div>
          <div className="text-gray-600 mb-3">
            This is a sample note preview.
          </div>
          <div className="flex justify-end text-xs text-gray-400">
            Edited 2 days ago
          </div>
        </div>
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
