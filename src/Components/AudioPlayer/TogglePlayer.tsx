import { useState, useEffect } from "react"
import type { RefObject } from "react"

export default function TogglePlayer({
  audioRef,
  isEnded,
}: {
  audioRef: RefObject<HTMLAudioElement | null>
  isEnded: boolean
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isEnded) {
      setPlaying(false)
    }
  }, [isEnded])

  return playing ? (
    <button onClick={() => setPlaying(false)}>||</button>
  ) : (
    <button onClick={() => setPlaying(true)}>&gt;</button>
  )
}
