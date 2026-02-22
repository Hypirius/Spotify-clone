import { useRef, useState } from "react"
import songData from "../../DemoAudios/song.mp3"
import ProgressBar from "./ProgressBar"
import ResetAudio from "./ResetAudio"
import LoopAudio from "./LoopAudio"
import TogglePlayer from "./TogglePlayer"
import AudioSource from "./AudioSource"
import BidirectionTimeControl from "./BidirectionTimeControl"

function AudioPlayer() {
  const [audioProgress, setAudioProgress] = useState(0)
  const [audioDuration, setAudioDuration] = useState(0)
  const [isEnded, setIsEnded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function changeTime(newTime = 0) {
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.currentTime = newTime
    }

    setAudioProgress(newTime)
  }

  function loopAudio(state: boolean) {
    if (audioRef.current instanceof HTMLAudioElement) {
      audioRef.current.loop = state
    }
  }

  function handleOnEnded(ended: boolean) {
    setIsEnded(ended)
    setAudioProgress(0)
  }

  return (
    <div id="playback-container">
      <AudioSource
        songData={songData}
        audioRef={audioRef}
        setAudioProgress={setAudioProgress}
        setAudioDuration={setAudioDuration}
        onEnded={handleOnEnded}
      />

      <ProgressBar
        progression={audioProgress}
        duration={audioDuration}
        changeTime={changeTime}
      />

      <div id="playback-controls">
        <ResetAudio handleReset={changeTime} />

        <BidirectionTimeControl
          action="backwards"
          changeTimeFn={changeTime}
          currentAudioProgress={audioProgress}>
          15-
        </BidirectionTimeControl>

        <TogglePlayer audioRef={audioRef} isEnded={isEnded} />

        <BidirectionTimeControl
          action="forwards"
          changeTimeFn={changeTime}
          currentAudioProgress={audioProgress}
          audioDuration={audioDuration}>
          15+
        </BidirectionTimeControl>

        <LoopAudio loopAudio={loopAudio} />
      </div>
    </div>
  )
}

export default AudioPlayer
