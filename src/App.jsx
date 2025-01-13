import { useState } from 'react'
import { matches } from './data'

function App() {
  const [currentDay, setCurrentDay] = useState('HOY')

  return (
    <div className="min-h-screen bg-green-900 p-4">
      {/* Main Container */}
      <div className="max-w-3xl mx-auto">
        {/* Logo */}
        {/* <div className="mb-8">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VbqlGa4vNLDJbKOCYskn2kaOizmCLo.png" 
            alt="Promiedos" 
            className="h-16"
          />
        </div> */}

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-green-700">
            Ayer
          </button>
          <div className="bg-black bg-opacity-50 text-white px-12 py-3 rounded-lg text-2xl font-bold">
            PARTIDOS HOY
          </div>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-green-700">
            Man.
          </button>
        </div>

        {/* Info Boxes */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-green-600 text-white p-4 rounded-lg text-center">
            <p className="text-lg font-bold">Hora:</p>
            <p>Argentina/Ur/Br</p>
          </div>
          <div className="flex-1 bg-green-600 text-white p-4 rounded-lg text-center">
            <p className="text-lg font-bold">Grito de Gol:</p>
            <p>Activado</p>
          </div>
        </div>

        {/* League Section */}
        <div className="bg-black bg-opacity-50 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🇦🇷</span>
            <h2 className="text-2xl font-bold">LIGA PROFESIONAL</h2>
            <span className="text-2xl">🇦🇷</span>
          </div>
        </div>

        {/* Matches */}
        <div className="bg-white rounded-b-lg overflow-hidden">
          {matches.map((match, index) => (
            <div 
              key={index}
              className={`grid grid-cols-[100px_1fr_50px_1fr] items-center ${
                index !== matches.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="bg-green-800 text-white p-4 flex flex-col items-center">
                <span className="text-xl font-bold">{match.time}</span>
                <img src={match.channelLogo} alt="Channel" className="h-6 mt-1" />
              </div>
              <div className="p-4 text-center">
                <img src={match.team1Logo} alt={match.team1} className="h-8 mx-auto mb-2" />
                <span className="text-lg font-semibold">{match.team1}</span>
              </div>
              <div className="text-center text-xl font-bold">vs</div>
              <div className="p-4 text-center">
                <img src={match.team2Logo} alt={match.team2} className="h-8 mx-auto mb-2" />
                <span className="text-lg font-semibold">{match.team2}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="bg-gray-800 text-white px-6 py-3 rounded-lg">
            Seccion Liga Profesional
          </div>
          <div className="flex gap-2">
            <button className="bg-green-600 p-3 rounded-lg hover:bg-green-700">
              🔊
            </button>
            <button className="bg-red-800 p-3 rounded-lg hover:bg-red-900">
              ✖
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

