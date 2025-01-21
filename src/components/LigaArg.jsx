import { useState, useEffect } from 'react'

function LigaArg() {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentMatches, setCurrentMatches] = useState([]);
  const maxRounds = 16;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3001/api/argentina/round/${currentRound}`);
        const data = await response.json();
        setCurrentMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [currentRound]);

  return (
    <div className="min-h-screen bg-green-900 p-4 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <button 
            className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-xl hover:bg-green-700"
            onClick={() => setCurrentRound(prev => prev > 1 ? prev - 1 : prev)}
          >
            Anterior
          </button>
          <div className="bg-black bg-opacity-50 text-white px-6 sm:px-12 py-2 sm:py-3 rounded-lg text-xl sm:text-2xl font-bold">
            FECHA {currentRound}
          </div>
          <button 
            className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-xl hover:bg-green-700"
            onClick={() => setCurrentRound(prev => prev < maxRounds ? prev + 1 : prev)}
          >
            Siguiente
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="p-4 text-center">Cargando partidos...</div>
          ) : (
            currentMatches.map((match, index) => (
            <div 
              key={index}
              className={`grid grid-cols-[80px_1fr_40px_1fr] sm:grid-cols-[100px_1fr_50px_1fr] items-center ${
                index !== currentMatches.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="bg-green-800 text-white p-2 sm:p-4 flex flex-col items-center">
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
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default LigaArg