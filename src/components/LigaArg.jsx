import { useState, useEffect } from "react";
import GruposArg from "./GruposArg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
        setCurrentMatches(data.matches || []);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setCurrentMatches([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [currentRound]);

  return (
    <div className="min-h-screen bg-[#001F0F] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-white text-2xl font-bold">
            LIGA PROFESIONAL ARGENTINA
          </h1>
        </div>

        <div className="flex justify-center mt-4">
          <nav className="bg-[#002913] rounded-lg overflow-hidden">
            <ul className="flex text-white">
              <li className="px-6 py-3 hover:bg-green-800 cursor-pointer font-medium">
                FIXTURE Y TABLAS
              </li>
              <li className="px-6 py-3 hover:bg-green-800 cursor-pointer font-medium">
                EQUIPOS Y ESTADÍSTICAS
              </li>
              <li className="px-6 py-3 hover:bg-green-800 cursor-pointer font-medium">
                CAMPEONES
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-1 min-w-0">
          <GruposArg />
        </div>

        <div className="flex-1 min-w-0">
          <div className="bg-[#001F0F] rounded-xl overflow-hidden">
            <div className="flex items-center justify-center p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setCurrentRound((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                  className="p-2 rounded-full hover:bg-green-700 transition-colors"
                  disabled={currentRound === 1}
                >
                  <ChevronLeftIcon className="h-8 w-8 text-white" />
                </button>

                <div
                  className="bg-green-500 border-2 border-green-300 text-white px-8 py-3 rounded-xl
                  text-2xl font-bold shadow-md shadow-green-900/50 backdrop-blur-sm"
                >
                  FECHA {currentRound}
                </div>

                <button
                  onClick={() =>
                    setCurrentRound((prev) =>
                      prev < maxRounds ? prev + 1 : prev
                    )
                  }
                  className="p-2 rounded-full hover:bg-green-700 transition-colors"
                  disabled={currentRound === maxRounds}
                >
                  <ChevronRightIcon className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl shadow-green-900/30">
              {isLoading ? (
                <div className="p-8 text-center flex items-center justify-center gap-3 text-green-800">
                  <svg
                    className="animate-spin h-8 w-8 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-lg">Cargando partidos...</span>
                </div>
              ) : (
                currentMatches.map((match, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_auto_1fr] items-center p-4 sm:p-6
                              ${
                                index !== currentMatches.length - 1
                                  ? "border-b border-green-100"
                                  : ""
                              }
                              hover:bg-green-50 transition-colors duration-200 group`}
                  >
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
                    <div className="mx-4 sm:mx-6 min-w-[60px] text-center">
                      {match.score ? (
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-xl sm:text-2xl font-bold text-green-700 bg-green-10 rounded-lg">
                            {match.score}
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                          <span className="text-sm font-bold text-green-600">
                            VS
                          </span>
                        </div>
                      )}
                    </div>
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
      </div>
    </div>
  );
}

export default LigaArg;
