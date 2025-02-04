import { useEffect, useState } from "react";

function LiveMatches() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/api/matches/live");
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        const data = await response.json();
        let matches = [];
        if (Array.isArray(data)) {
          matches = data;
        } else if (data && typeof data === "object") {
          matches = Object.values(data).flat();
        }
        setLiveMatches(matches);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 p-4 lg:p-8">
      <p className="flex flex-center justify-center text-white text-4xl p-2">
        HOY
      </p>
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        {isLoading ? (
          <div className="p-8 text-center flex items-center justify-center gap-3 text-green-100">
            <svg
              className="animate-spin h-8 w-8 text-green-100"
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
        ) : error ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl shadow-green-900/30">
            <p className="text-red-600 text-center">Error: {error}</p>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl shadow-green-900/30">
            {liveMatches.length === 0 ? (
              <p className="p-4 text-center text-green-800">
                No hay partidos en vivo en este momento
              </p>
            ) : (
              liveMatches.map((match, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1fr_auto_1fr] items-center p-4 sm:p-6
                    ${
                      index !== liveMatches.length - 1
                        ? "border-b border-green-100"
                        : ""
                    }
                    hover:bg-green-50 transition-colors duration-200 group
                  `}
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
                        <span className="text-xl sm:text-2xl font-bold text-green-700 bg-green-100 px-3 py-1 rounded-lg">
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
                    {match.time && (
                      <span className="block text-xs text-gray-600 mt-1">
                        {match.time}
                      </span>
                    )}
                    {match.date && (
                      <span className="block text-xs text-gray-600">
                        {match.date}
                      </span>
                    )}
                    <span
                      className={`block text-xs mt-1 ${
                        match.status === "LIVE"
                          ? "text-red-600 font-bold"
                          : "text-gray-600"
                      }`}
                    >
                      {match.status || "SCHEDULED"}
                    </span>
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
        )}
      </div>
    </div>
  );
}

export default LiveMatches;
