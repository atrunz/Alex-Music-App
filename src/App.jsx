import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [song, setSong] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomSong = async () => {
    setLoading(true)

    try {
      const response = await fetch('https://itunes.apple.com/search?term=pop&entity=song&limit=25')
      const data = await response.json()
      const results = data.results
      const randomIndex = Math.floor(Math.random() * results.length)
      const randomSong = results[randomIndex]
      setSong(randomSong)
    } catch (error) {
      console.error('Failed to fetch song:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomSong()
  }, [])

  return (
    <div className="app">
      <h1>Music App</h1>

      <button onClick={fetchRandomSong} disabled={loading}>
        {loading ? 'Loading...' : 'Get a Random Song'}
      </button>

      {loading && <p className="loading-text">Loading song...</p>}
      {song && !loading && (
        <div className="joke-card">
          <p className="setup">{song.trackName}</p>
          <p className="punchline">{song.artistName}</p>

          <img
            src={song.artworkUrl100}
            alt={`Album art for ${song.trackName}`}
          />

          <audio controls src={song.previewUrl}>
            Your browser does not support the audio element.
          </audio>
       </div>
      )}
    </div>
  )
}

export default App