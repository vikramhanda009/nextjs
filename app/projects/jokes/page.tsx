

'use client'

import { useEffect, useState } from 'react'
interface Joke {
  id: number
  type: string
  setup: string
  punchline: string
}
const URL = 'https://official-joke-api.appspot.com/random_joke'

export default function Jokes() {
  const [randomJokes, setRandomJokes] = useState<Joke | null>(null)
  const [showJokes, setShowJokes] = useState(true)

  const fetchRandomJokes = async () => {
    const res = await fetch(URL)
    const data: Joke = await res.json()
    setRandomJokes(data)
    setShowJokes(true) // reset punchline on next joke
  }

  useEffect(() => {
    fetchRandomJokes()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border-2 border-amber-200">
        <div className="text-center">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Random Jokes Generator
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              {randomJokes?.setup}
            </p>

            {showJokes ? (
              <button
                onClick={() => setShowJokes(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md cursor-pointer hover:shadow-lg"
              >
                Reveal Punchline
              </button>
            ) : (
              <div className="animate-fade-in">
                <p className="text-xl text-amber-700 font-bold bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
                  {randomJokes?.punchline} 😄
                </p>
                <button
                  onClick={() => setShowJokes(true)}
                  className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Hide Punchline
                </button>
              </div>
            )}
          </div>

          <button
            onClick={fetchRandomJokes}
            className="text-l text-amber-700 font-bold bg-amber-50 px-4 mt-6 rounded-lg border-2 border-amber-200 cursor-pointer hover:shadow-lg"
          >
            Next
          </button>

          <div className="mt-6 text-sm text-gray-500">
            Joke ID: {randomJokes?.id ?? '—'}
          </div>
        </div>
      </div>
    </div>
  )
}
