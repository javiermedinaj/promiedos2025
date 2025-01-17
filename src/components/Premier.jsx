import premierMatches from '../data_test/premier/premier_matches.json'

function Premier() {
  return (
    <div className="min-h-screen bg-green-900 px-4 py-8 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        {/* Header */}
        <div className="bg-black bg-opacity-50 text-white px-6 sm:px-12 py-2 sm:py-3 rounded-lg text-xl sm:text-2xl font-bold text-center mb-6">
          PREMIER LEAGUE
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          {premierMatches.map((match, index) => (
            <div 
              key={index}
              className={`grid grid-cols-[80px_1fr_40px_1fr] sm:grid-cols-[100px_1fr_50px_1fr] items-center ${
                index !== premierMatches.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="bg-purple-800 text-white p-2 sm:p-4 flex flex-col items-center">
                <span className="text-lg sm:text-xl font-bold">{match.time}</span>
                <span className="text-xs sm:text-sm mt-1">{match.date}</span>
              </div>
              <div className="p-2 sm:p-4 text-center">
                <img 
                  src={match.homeTeamImg} 
                  alt={match.homeTeam} 
                  className="h-6 sm:h-8 mx-auto mb-1 sm:mb-2" 
                />
                <span className="text-sm sm:text-lg font-semibold">
                  {match.homeTeam}
                </span>
              </div>
              <div className="text-center text-base sm:text-xl font-bold">
                vs
              </div>
              <div className="p-2 sm:p-4 text-center">
                <img 
                  src={match.awayTeamImg} 
                  alt={match.awayTeam} 
                  className="h-6 sm:h-8 mx-auto mb-1 sm:mb-2" 
                />
                <span className="text-sm sm:text-lg font-semibold">
                  {match.awayTeam}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Premier