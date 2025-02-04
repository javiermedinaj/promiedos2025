import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar({ onToggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={onToggleSidebar}
            className="text-white p-2 rounded-md hover:bg-green-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="text-white font-bold text-xl">
            ProMiedos
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;