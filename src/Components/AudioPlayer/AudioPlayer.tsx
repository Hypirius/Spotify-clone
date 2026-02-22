import { useRef, useState } from "react"
import songData from "../../DemoAudios/song.mp3"
import ProgressBar from "./ProgressBar"
import ResetAudio from "./ResetAudio"
import LoopAudio from "./LoopAudio"
import TogglePlayer from "./TogglePlayer"
import AudioSource from "./AudioSource"

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

  return (
    <div id="playback-container">
      <AudioSource
        songData={songData}
        audioRef={audioRef}
        setAudioProgress={setAudioProgress}
        setAudioDuration={setAudioDuration}
        setIsEnded={setIsEnded}
      />

      <ProgressBar
        progression={audioProgress}
        duration={audioDuration}
        changeTime={changeTime}
      />

      <div id="playback-controls">
        <ResetAudio handleReset={changeTime} />
        <TogglePlayer audioRef={audioRef} ended={isEnded} />
        <LoopAudio loopAudio={loopAudio} />
      </div>
    </div>
  )
}

export default AudioPlayer
