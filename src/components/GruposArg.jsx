import React, { useState, useEffect } from "react";

function GruposArg() {
  const [grupos, setGrupos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/argentina/grupos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los grupos");
        }
        return res.json();
      })
      .then((data) => {
        setGrupos(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-white">Cargando...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (!grupos || (!grupos.grupoA && !grupos.grupoB)) {
    return <div className="text-white">No se encontraron grupos</div>;
  }

  const renderTableRows = (grupo) => {
    return grupo.map((row, index) => (
      <tr
        key={index}
        className="text-white hover:bg-[#002913] transition-colors"
      >
        <td className="p-2 text-center">{row[0]}</td>
        <td className="p-2 flex items-center gap-2">{row[1]}</td>
        <td className="p-2 text-center font-bold text-yellow-400">{row[2]}</td>
        <td className="p-2 text-center">{row[3]}</td>

        <td className="p-2 text-center text-green-400">{row[6]}</td>
        <td className="p-2 text-center text-yellow-400">{row[7]}</td>
        <td className="p-2 text-center text-red-400">{row[8]}</td>
        <td className="p-2">
          <div className="flex gap-1 justify-center">
            {row[9].split("").map((result, i) => (
              <span
                key={i}
                className={`w-5 h-5 rounded-sm text-xs flex items-center justify-center 
                  ${
                    result === "V"
                      ? "bg-green-600"
                      : result === "E"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
              >
                {result}
              </span>
            ))}
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl font-bold mb-4">APERTURA</h2>

      {grupos && (
        <>
          <div className="bg-[#001F0F] rounded-xl overflow-hidden border border-green-900">
            <table className="w-full">
              <thead className="bg-[#002913] text-white">
                <tr>
                  <th className="p-2 text-center w-8">#</th>
                  <th className="p-2 text-left">Equipos</th>
                  <th className="p-2 text-center w-12">PTS</th>
                  <th className="p-2 text-center w-12">J</th>

                  <th className="p-2 text-center w-12">G</th>
                  <th className="p-2 text-center w-12">E</th>
                  <th className="p-2 text-center w-12">P</th>
                  <th className="p-2 text-center">Últimos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-900">
                {renderTableRows(grupos.grupoA)}
              </tbody>
            </table>
          </div>

          <div className="bg-[#001F0F] rounded-xl overflow-hidden border border-green-900">
            <table className="w-full">
              <thead className="bg-[#002913] text-white">
                <tr>
                  <th className="p-2 text-center w-8">#</th>
                  <th className="p-2 text-left">Equipos</th>
                  <th className="p-2 text-center w-12">PTS</th>
                  <th className="p-2 text-center w-12">J</th>

                  <th className="p-2 text-center w-12">G</th>
                  <th className="p-2 text-center w-12">E</th>
                  <th className="p-2 text-center w-12">P</th>
                  <th className="p-2 text-center">Últimos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-900">
                {renderTableRows(grupos.grupoB)}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default GruposArg;
