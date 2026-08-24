// Singleton audio instance to prevent memory leaks and overlapping audio objects
let audioInstance = null

/**
 * Plays an interaction sound effect on button and link clicks.
 * @param {string} [src='/sound.mp3'] - Path to the audio file.
 * @param {number} [volume=0.3] - Desired playback volume (0.0 to 1.0).
 */
export const playInteractionSound = (src = '/sound.mp3', volume = 0.3) => {
  try {
    if (!audioInstance) {
      audioInstance = new Audio(src)
    }
    audioInstance.currentTime = 0
    audioInstance.volume = volume
    audioInstance.play().catch(() => {
      // Autoplay / interaction policy catch
    })
  } catch {
    // Graceful fallback if Audio API is unavailable
  }
}

export default playInteractionSound
