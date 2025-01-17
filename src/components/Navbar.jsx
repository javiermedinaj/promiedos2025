import logo from '/logo_white.webp'

function Navbar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-green-900 shadow-lg z-50">
      <div className="h-full px-4 flex items-center">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-white hover:bg-green-800 rounded-md"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

     
        <div className="flex-1 flex-start p-2 m-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-6 w-auto"
          />
        </div>
        <div className="lg:hidden w-10"></div>
      </div>
    </nav>
  )
}

export default Navbar