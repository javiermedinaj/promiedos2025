import { useState, useEffect } from "react";

function Premier() {
  const [currentMatchday, setCurrentMatchday] = useState(1);
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const maxMatchdays = 38;

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3001/api/premier/matchday/${currentMatchday}`
        );
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [currentMatchday]);

  return (
    <div className="min-h-screen bg-green-900 px-4 py-8 lg:p-8">
      <div className="max-w-3xl mx-auto pt-12 lg:pt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <button
            className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-xl hover:bg-green-700"
            onClick={() =>
              setCurrentMatchday((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Anterior
          </button>
          <div className="bg-black bg-opacity-50 text-white px-6 sm:px-12 py-2 sm:py-3 rounded-lg text-xl sm:text-2xl font-bold">
            FECHA {currentMatchday}
          </div>
          <button
            className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-xl hover:bg-green-700"
            onClick={() =>
              setCurrentMatchday((prev) =>
                prev < maxMatchdays ? prev + 1 : prev
              )
            }
          >
            Siguiente
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="p-4 text-center">Cargando partidos...</div>
          ) : (
            matches.map((match, index) => (
              <div
                key={index}
                className={`grid grid-cols-[80px_1fr_40px_1fr] sm:grid-cols-[100px_1fr_50px_1fr] items-center ${
                  index !== matches.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="bg-purple-800 text-white p-4 sm:p-4 flex flex-col items-center">
                  {match.time !== "Hora desconocida" && (
                    <span className="text-lg sm:text-xl font-bold">
                      {match.time}
                    </span>
                  )}
                  {match.date !== "Fecha desconocida" && (
                    <span className="text-xs sm:text-sm mt-1">
                      {match.date}
                    </span>
                  )}
                </div>
                <div className="p-2 sm:p-4 text-center">
                  <img
                    src={match.team1?.image}
                    alt="home team"
                    className="h-6 sm:h-8 mx-auto mb-1 sm:mb-2"
                  />
                  <span className="text-sm sm:text-lg font-semibold">
                    {match.team1?.name || "TBD"}
                  </span>
                </div>
                <div className="text-center text-base sm:text-xl font-bold">
                  {match.result || "vs"}
                </div>
                <div className="p-2 sm:p-4 text-center">
                  <img
                    src={match.team2?.image}
                    alt="away team"
                    className="h-6 sm:h-8 mx-auto mb-1 sm:mb-2"
                  />
                  <span className="text-sm sm:text-lg font-semibold">
                    {match.team2?.name || "TBD"}
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

export default Premier;
