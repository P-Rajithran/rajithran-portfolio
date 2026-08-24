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
      className={`audio-toggle-btn ${muted ? 'muted' : 'unmuted'}`}
      onClick={toggleMute}
      aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
      title={muted ? 'Sound Effects: Muted (Click to enable)' : 'Sound Effects: Active (Click to mute)'}
      type="button"
    >
      {muted ? (
        <FiVolumeX className="audio-icon muted-icon" />
      ) : (
        <FiVolume2 className="audio-icon unmuted-icon" />
      )}
      <span className="audio-toggle-status">{muted ? 'SFX OFF' : 'SFX ON'}</span>
    </button>
  )
}

export default AudioToggle
