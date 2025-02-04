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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-green-900 p-4 lg:p-8">
        <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
          <p className="text-white text-center">Cargando partidos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-green-900 p-4 lg:p-8">
        <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
          <p className="text-white text-center">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-900 p-4 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          HOY
        </h2>
        <div className="bg-white rounded-lg overflow-hidden">
          {liveMatches.length === 0 ? (
            <p className="p-4 text-center">
              No hay partidos en vivo en este momento
            </p>
          ) : (
            liveMatches.map((match, index) => (
              <div key={index} className="border-b border-gray-200 last:border-none">
                <div className="p-2 sm:p-4 grid grid-cols-3 items-center gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={match.homeTeamImg}
                      alt={match.homeTeam}
                      className="h-8 w-8 sm:h-12 sm:w-12 object-contain mx-auto mb-2"
                    />
                    <span className="text-sm sm:text-base font-semibold text-center line-clamp-2">
                      {match.homeTeam}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <span className="text-xl sm:text-2xl font-bold">
                      {match.score || "vs"}
                    </span>
                    {match.time !== "Hora desconocida" && (
                      <span className="text-xs sm:text-sm text-gray-600">
                        {match.time}
                      </span>
                    )}
                    {match.date !== "Fecha desconocida" && (
                      <span className="text-xs sm:text-sm text-gray-600">
                        {match.date}
                      </span>
                    )}
                    <span
                      className={`text-xs sm:text-sm ${
                        match.status === "LIVE"
                          ? "text-red-600 font-bold"
                          : "text-gray-600"
                      }`}
                    >
                      {match.status || "SCHEDULED"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={match.awayTeamImg}
                      alt={match.awayTeam}
                      className="h-8 w-8 sm:h-12 sm:w-12 object-contain mx-auto mb-2"
                    />
                    <span className="text-sm sm:text-base font-semibold text-center line-clamp-2">
                      {match.awayTeam}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveMatches;