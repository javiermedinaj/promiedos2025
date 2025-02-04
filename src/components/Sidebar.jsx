import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Sidebar({ activeLeague, setActiveLeague, isSidebarOpen, setIsSidebarOpen }) {
  const handleNavigation = (league) => {
    setActiveLeague(league);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-green-800 text-white flex flex-col 
      transition-all duration-300 ease-in-out shadow-lg z-50
      ${isSidebarOpen ? "w-64" : "w-20"}`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-3 top-4 bg-green-600 p-1 rounded-full 
        hover:bg-green-700 transition-all duration-300"
      >
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </button>

      <div className="p-4 flex flex-col gap-8">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                onClick={() => handleNavigation("home")}
                className="flex items-center gap-4 p-2 rounded hover:bg-green-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 min-w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {isSidebarOpen && <span>Home</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/liga_arg"
                onClick={() => handleNavigation("argentina")}
                className="flex items-center gap-4 p-2 rounded hover:bg-green-700 transition"
              >
                <img 
                  src="/lpfa.png" 
                  className="h-6 w-6 min-w-6 object-contain"
                  alt="Liga Argentina" 
                />
                {isSidebarOpen && <span>Liga Argentina</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/premier"
                onClick={() => handleNavigation("premier")}
                className="flex items-center gap-4 p-2 rounded hover:bg-green-700 transition"
              >
                <img 
                  src="/premier.png"
                  className="h-6 w-6 min-w-6 object-contain"
                  alt="Premier League"
                />
                {isSidebarOpen && <span>Premier League</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;