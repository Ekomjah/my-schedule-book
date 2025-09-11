export default function NotesEl({ darkTheme }) {
  return (
    <div
      className={`bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer ${
        darkTheme ? "!bg-gray-900 text-gray-200" : "!bg-gray-200 !text-gray-900"
      }`}
    >
      <div className="font-semibold mb-2 text-lg">Note Title</div>
      <div className="mb-3">This is a sample note preview.</div>
      <div className="flex justify-end text-xs">Edited 2 days ago</div>
    </div>
  );
}
