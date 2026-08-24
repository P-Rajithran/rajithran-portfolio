const AUDIO_STORAGE_KEY = 'portfolio_audio_muted'

// Singleton audio instance to prevent memory leaks and overlapping instances
let audioInstance = null

/**
 * Checks whether global audio effects are currently muted in localStorage.
 * @returns {boolean} True if muted, false otherwise.
 */
export const isAudioMuted = () => {
  try {
    return localStorage.getItem(AUDIO_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

/**
 * Updates the global audio mute state and synchronizes via CustomEvent.
 * @param {boolean} muted - The new mute state.
 */
export const setAudioMuted = (muted) => {
  try {
    localStorage.setItem(AUDIO_STORAGE_KEY, String(muted))
    window.dispatchEvent(new CustomEvent('audiomutechange', { detail: { muted } }))
  } catch {
    // Graceful fallback if localStorage is disabled or restricted
  }
}

/**
 * Plays an interaction sound effect if audio is not globally muted.
 * @param {string} [src='/sound.mp3'] - Path to audio file.
 * @param {number} [volume=0.3] - Desired playback volume (0.0 to 1.0).
 */
export const playInteractionSound = (src = '/sound.mp3', volume = 0.3) => {
  if (isAudioMuted()) return

  try {
    if (!audioInstance || audioInstance.src !== new URL(src, window.location.href).href) {
      audioInstance = new Audio(src)
    }
    audioInstance.currentTime = 0
    audioInstance.volume = volume
    audioInstance.play().catch(() => {
      // Gracefully ignore autoplay/interaction policy restrictions
    })
  } catch {
    // Safe fallback for environments where Web Audio / HTML5 Audio is unavailable
  }
}
