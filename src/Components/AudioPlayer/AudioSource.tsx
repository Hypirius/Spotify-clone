import type { AudioSourceProps } from "../../lib/types"

export default function AudioSource({
  songData,
  audioRef,
  setAudioDuration,
  setAudioProgress,
  setIsEnded,
}: AudioSourceProps) {
  return (
    <audio
      src={songData}
      onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
      onTimeUpdate={(e) => setAudioProgress(e.currentTarget.currentTime)}
      onEnded={(e) => setIsEnded(e.currentTarget.ended)}
      preload="auto"
      id="audio"
      ref={audioRef}
      hidden></audio>
  )
}
