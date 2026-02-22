import { useState, useEffect } from "react"
import type { RefObject } from "react"

export default function TogglePlayer({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement | null>
  ended: boolean
}) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    async function activateAudio() {
      try {
        if (audioRef.current instanceof HTMLAudioElement) {
          if (playing) {
            await audioRef?.current.play()
          } else {
            await audioRef?.current.pause()
          }
        }
      } catch {
        console.log("Error occured while initiating audio")
      }
    }

    activateAudio()
  }, [playing, audioRef])

  return playing ? (
    <button onClick={() => setPlaying(false)}>||</button>
  ) : (
    <button onClick={() => setPlaying(true)}>&gt;</button>
  )
}
