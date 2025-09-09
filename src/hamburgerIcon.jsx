export default function HamburgerIcon({ onClick, isOpen }) {
  return (
    <button
      aria-label="Toggle menu"
      onClick={onClick}
      className="relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none focus-visible:outline-none focus-visible:ring-0 group"
    >
      {/* Top bar */}
      <span
        className={`block absolute left-1/2 w-7 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
          isOpen
            ? "rotate-45 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-2 left-1/2 -translate-x-1/2"
        }`}
      ></span>
      {/* Middle bar */}
      <span
        className={`block absolute left-1/2 w-7 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-0 top-1/2 -translate-x-1/2"
            : "top-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
      ></span>
      {/* Bottom bar */}
      <span
        className={`block absolute left-1/2 w-7 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
          isOpen
            ? "-rotate-45 top-1/2 -translate-x-1/2 -translate-y-1/2"
            : "bottom-2 left-1/2 -translate-x-1/2"
        }`}
      ></span>
    </button>
  );
}
