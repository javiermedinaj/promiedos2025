import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import LigaArgentina from './LigaArg'
import Premier from './Premier'
import LiveMatches from './LiveMatches'

function Layout() {
  const [activeLeague, setActiveLeague] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="lg:flex">
        <Sidebar 
          activeLeague={activeLeague}
          setActiveLeague={setActiveLeague}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1 pt-16">
          {activeLeague === 'home' && <LiveMatches />}
          {activeLeague === 'argentina' && <LigaArgentina />}
          {activeLeague === 'premier' && <Premier />}
        </main>
      </div>
    </div>
  )
}

export default Layout