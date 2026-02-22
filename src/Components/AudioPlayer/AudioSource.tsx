import type { Dispatch, RefObject, SetStateAction } from "react"

export type AudioSourceProps = {
  songData: string
  audioRef: RefObject<HTMLAudioElement | null>
  setAudioProgress: Dispatch<SetStateAction<number>>
  setAudioDuration: Dispatch<SetStateAction<number>>
  onEnded: (ended: boolean) => void
}

export default function AudioSource({
  songData,
  audioRef,
  setAudioDuration,
  setAudioProgress,
  onEnded,
}: AudioSourceProps) {
  return (
    <audio
      src={songData}
      onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
      onTimeUpdate={(e) => setAudioProgress(e.currentTarget.currentTime)}
      onEnded={(e) => onEnded(e.currentTarget.ended)}
      preload="auto"
      id="audio"
      ref={audioRef}
      hidden></audio>
  )
}
