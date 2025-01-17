function Sidebar({ activeLeague, setActiveLeague, setIsSidebarOpen, isSidebarOpen }) {
  const leagues = [
    { id: 'argentina', name: 'Liga Argentina' },
    { id: 'premier', name: 'Premier League' }
  ]

  const handleLeagueClick = (leagueId) => {
    setActiveLeague(leagueId)
    setIsSidebarOpen(false)
  }

  return (
    <>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div className={`
        fixed top-16 bottom-0 w-full lg:w-64 bg-green-950 text-white transform 
        transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 lg:top-0
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Ligas</h2>
          <nav className="space-y-4">
            {leagues.map(league => (
              <button
                key={league.id}
                onClick={() => handleLeagueClick(league.id)}
                className={`w-full text-left p-4 rounded-lg text-lg transition-colors
                  ${activeLeague === league.id 
                    ? 'bg-green-600 text-white' 
                    : 'hover:bg-gray-800'
                  }`}
              >
                {league.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar