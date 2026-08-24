import React, { useState, useEffect } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import { isAudioMuted, setAudioMuted, playInteractionSound } from '../utils/audio'
import './AudioToggle.css'

const AudioToggle = () => {
  const [muted, setMuted] = useState(() => isAudioMuted())

  useEffect(() => {
    const handleSync = (e) => {
      if (e?.detail?.muted !== undefined) {
        setMuted(e.detail.muted)
      } else {
        setMuted(isAudioMuted())
      }
    }

    window.addEventListener('audiomutechange', handleSync)
    window.addEventListener('storage', handleSync)

    return () => {
      window.removeEventListener('audiomutechange', handleSync)
      window.removeEventListener('storage', handleSync)
    }
  }, [])

  const toggleMute = () => {
    const nextMuted = !muted
    setMuted(nextMuted)
    setAudioMuted(nextMuted)
    if (!nextMuted) {
      playInteractionSound('/sound.mp3', 0.3)
    }
  }

  return (
    <button
      type="button"
      className={`audio-toggle-btn ${muted ? 'muted' : 'unmuted'}`}
      onClick={toggleMute}
      aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
      title={muted ? 'Sound Effects: Muted (Click to enable)' : 'Sound Effects: Active (Click to mute)'}
    >
      {muted ? (
        <FiVolumeX className="audio-icon" aria-hidden="true" />
      ) : (
        <FiVolume2 className="audio-icon" aria-hidden="true" />
      )}
      <span className="audio-toggle-label">{muted ? 'MUTED' : 'SOUND ON'}</span>
    </button>
  )
}

export default AudioToggle
