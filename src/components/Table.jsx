import React from 'react';
import grupos from '../data_test/ligaArg/grupos.json';

const LigaArg = () => {
  const renderTable = (grupo, name) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Pos</th>
              <th className="py-2 px-4 border">Equipo</th>
              <th className="py-2 px-4 border">PJ</th>
              <th className="py-2 px-4 border">G</th>
              <th className="py-2 px-4 border">E</th>
              <th className="py-2 px-4 border">P</th>
              <th className="py-2 px-4 border">GF</th>
              <th className="py-2 px-4 border">GC</th>
              <th className="py-2 px-4 border">Dif</th>
              <th className="py-2 px-4 border">Pts</th>
            </tr>
          </thead>
          <tbody>
            {grupo.map((team, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border">{team[0]}</td>
                <td className="py-2 px-4 border">{team[1]}</td>
                <td className="py-2 px-4 border">{team[2]}</td>
                <td className="py-2 px-4 border">{team[3]}</td>
                <td className="py-2 px-4 border">{team[4]}</td>
                <td className="py-2 px-4 border">{team[5]}</td>
                <td className="py-2 px-4 border">{team[6]}</td>
                <td className="py-2 px-4 border">{team[7]}</td>
                <td className="py-2 px-4 border">{team[8]}</td>
                <td className="py-2 px-4 border">{team[9]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Liga Argentina</h1>
      {renderTable(grupos.grupoA, 'Grupo A')}
      {renderTable(grupos.grupoB, 'Grupo B')}
    </div>
  );
};

export default LigaArg;