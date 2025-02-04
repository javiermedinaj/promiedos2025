import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [activeLeague, setActiveLeague] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onToggleSidebar={handleToggleSidebar} />
      
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="fixed inset-0 bg-black opacity-25"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          
          <Sidebar 
            activeLeague={activeLeague}
            setActiveLeague={setActiveLeague}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      )}

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}

export default Layout;