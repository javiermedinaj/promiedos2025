import { useState } from 'react'
import round1 from '../data_test/ligaArg/round_1.json'
import round2 from '../data_test/ligaArg/round_2.json'
import round3 from '../data_test/ligaArg/round_3.json'
import round4 from '../data_test/ligaArg/round_4.json'
import round5 from '../data_test/ligaArg/round_5.json'
import round6 from '../data_test/ligaArg/round_6.json'
import round7 from '../data_test/ligaArg/round_7.json'
import round8 from '../data_test/ligaArg/round_8.json'
import round9 from '../data_test/ligaArg/round_9.json'
import round10 from '../data_test/ligaArg/round_10.json'
import round11 from '../data_test/ligaArg/round_11.json'
import round12 from '../data_test/ligaArg/round_12.json'
import round13 from '../data_test/ligaArg/round_13.json'
import round14 from '../data_test/ligaArg/round_14.json'
import round15 from '../data_test/ligaArg/round_15.json'
import round16 from '../data_test/ligaArg/round_16.json'

function LigaArg() {
  const [currentRound, setCurrentRound] = useState(1)
  
  const allRounds = {
    1: round1,
    2: round2,
    3: round3,
    4: round4,
    5: round5,
    6: round6,
    7: round7,
    8: round8,
    9: round9,
    10: round10,
    11: round11,
    12: round12,
    13: round13,
    14: round14,
    15: round15,
    16: round16
  }

  const currentMatches = allRounds[currentRound] || []
  const maxRounds = Object.keys(allRounds).length

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
          {currentMatches.map((match, index) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default LigaArg