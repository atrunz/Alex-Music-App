import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)

    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()

    setJoke(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="app">
      <h1>Joke App</h1>
      <button onClick={fetchJoke}>Get a Joke</button>
      {loading && <p>Loading joke...</p>}
      {joke && !loading && (
        <div className="joke-card">
          <p className="setup">{joke.setup}</p>
          <p className="punchline">{joke.punchline}</p>
        </div>
      )}
    </div>
  )
}

export default App