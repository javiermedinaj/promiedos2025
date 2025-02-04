import { useState, useEffect } from "react";
function LigaArg() {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentMatches, setCurrentMatches] = useState([]);
  const maxRounds = 16;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3001/api/argentina/round/${currentRound}`
        );
        const data = await response.json();
        // Access matches array from the round data
        setCurrentMatches(data.matches || []); // Add the .matches since the API returns round data object
      } catch (error) {
        console.error("Error fetching matches:", error);
        setCurrentMatches([]); // Set empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [currentRound]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 p-4 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <button
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl 
                      text-lg font-semibold transition-all duration-300 transform hover:scale-105
                      shadow-lg shadow-green-900/50 flex items-center justify-center gap-2"
            onClick={() => setCurrentRound((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Anterior
          </button>
          
          <div className="bg-green-500 border-2 border-green-300 text-white px-8 py-3 rounded-xl
                        text-2xl font-bold shadow-md shadow-green-900/50 backdrop-blur-sm">
            FECHA {currentRound}
          </div>
          
          <button
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl 
                      text-lg font-semibold transition-all duration-300 transform hover:scale-105
                      shadow-lg shadow-green-900/50 flex items-center justify-center gap-2"
            onClick={() => setCurrentRound((prev) => (prev < maxRounds ? prev + 1 : prev))}
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl shadow-green-900/30">
          {isLoading ? (
            <div className="p-8 text-center flex items-center justify-center gap-3 text-green-800">
              <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-lg">Cargando partidos...</span>
            </div>
          ) : (
            currentMatches.map((match, index) => (
              <div
                key={index}
                className={`grid grid-cols-[1fr_auto_1fr] items-center p-4 sm:p-6
                  ${index !== currentMatches.length - 1 ? "border-b border-green-100" : ""}
                  hover:bg-green-50 transition-colors duration-200 group`}
              >
                {/* Home Team */}
                <div className="flex items-center justify-end gap-4">
                  <span className="text-sm sm:text-base font-semibold text-green-900 text-right">
                    {match.homeTeam}
                  </span>
                  <img
                    src={match.homeTeamImg}
                    alt={match.homeTeam}
                    className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                  />
                </div>

                {/* Score */}
                <div className="mx-4 sm:mx-6 min-w-[60px] text-center">
                  {match.score ? (
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-green-700 bg-green-100 px-3 py-1 rounded-lg">
                        {match.score}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                      <span className="text-sm font-bold text-green-600">VS</span>
                    </div>
                  )}
                </div>

                {/* Away Team */}
                <div className="flex items-center justify-start gap-4">
                  <img
                    src={match.awayTeamImg}
                    alt={match.awayTeam}
                    className="h-8 sm:h-10 w-8 sm:w-10 object-contain"
                  />
                  <span className="text-sm sm:text-base font-semibold text-green-900">
                    {match.awayTeam}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LigaArg;
