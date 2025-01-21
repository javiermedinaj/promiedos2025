import { useEffect, useState } from "react";

function LiveMatches() {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/matches/live")
      .then((response) => response.json())
      .then((data) => setLiveMatches(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-green-900 p-4 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Partidos En Vivo
        </h2>
        <div className="bg-white rounded-lg overflow-hidden">
          {liveMatches.length === 0 ? (
            <p className="p-4 text-center">
              No hay partidos en vivo en este momento
            </p>
          ) : (
            liveMatches.map((match, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
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
                      {match.score || "0-0"}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                      {match.time || "Sin hora"}
                    </span>
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
