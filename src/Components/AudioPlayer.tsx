import {
  useEffect,
  useRef,
  useState,
  type RefObject,
  type ChangeEvent,
} from "react"
import songData from "../DemoAudios/song.mp3"

type changeTimeFn = (time?: number) => void

function AudioPlayer() {
  const [audioProgress, setAudioProgress] = useState(0)
  const [audioDuration, setAudioDuration] = useState(0)
  const [isEnded, setIsEnded] = useState(false)
  const audio = useRef<HTMLAudioElement | null>(null)

  function changeTime(newTime = 0) {
    if (audio.current instanceof HTMLAudioElement) {
      audio.current.currentTime = newTime
    }

    setAudioProgress(newTime)
  }

  function loopAudio(state: boolean) {
    if (audio.current instanceof HTMLAudioElement) {
      audio.current.loop = state
    }
  }

  return (
    <div id="playback-container">
      <audio
        src={songData}
        onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setAudioProgress(e.currentTarget.currentTime)}
        onEnded={(e) => setIsEnded(e.currentTarget.ended)}
        preload="auto"
        id="audio"
        ref={audio}
        hidden></audio>
      <div id="progress-bar">
        <ProgressBar
          progression={audioProgress}
          duration={audioDuration}
          changeTime={changeTime}
        />
      </div>
      <div id="playback-controls">
        <Reset handleReset={changeTime} />
        <Backwards changeTime={changeTime} progress={audioProgress} />
        <Player audio={audio} ended={isEnded} />
        <Forwards
          changeTime={changeTime}
          progress={audioProgress}
          totalDuration={audioDuration}
        />
        <Loop loopAudio={loopAudio} />
      </div>
    </div>
  )
}

function ProgressBar({
  progression,
  duration,
  changeTime,
}: {
  progression: number
  duration: number
  changeTime: changeTimeFn
}) {
  function handleSlide(event: ChangeEvent<HTMLInputElement>) {
    changeTime(Number(event.target.value))
  }
  return (
    <input
      type="range"
      min="0"
      max={duration}
      value={progression}
      onChange={handleSlide}
    />
  )
}

function Reset({ handleReset }: { handleReset: () => void }) {
  return <button onClick={() => handleReset()}>O</button>
}

function Forwards({
  changeTime,
  progress,
  totalDuration,
}: {
  changeTime: changeTimeFn
  progress: number
  totalDuration: number
}) {
  function addTime() {
    const addedTime = progress + 15

    if (addedTime < totalDuration) {
      changeTime(addedTime)
    }
  }

  return <button onClick={addTime}>15+</button>
}

function Backwards({
  changeTime,
  progress,
}: {
  changeTime: changeTimeFn
  progress: number
}) {
  function deductTime() {
    const deductedTime = progress - 15

    if (deductedTime > 0) {
      changeTime(deductedTime)
    }
  }

  return <button onClick={deductTime}>15-</button>
}

function Player({
  audio,
}: {
  audio: RefObject<HTMLAudioElement | null>
  ended: boolean
}) {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    async function activateAudio() {
      try {
        if (audio.current instanceof HTMLAudioElement) {
          if (playing) {
            await audio?.current.play()
          } else {
            await audio?.current.pause()
          }
        }
      } catch {
        console.log("Error occured while initiating audio")
      }
    }

    activateAudio()
  }, [playing, audio])

  return playing ? (
    <button onClick={() => setPlaying(false)}>||</button>
  ) : (
    <button onClick={() => setPlaying(true)}>&gt;</button>
  )
}

function Loop({ loopAudio }: { loopAudio: (state: boolean) => void }) {
  const [isOn, setIsOn] = useState(false)

  function toggleLoop() {
    setIsOn((prev) => !prev)
  }

  if (isOn) {
    loopAudio(true)
  } else {
    loopAudio(false)
  }

  return (
    <button style={{ opacity: isOn ? "1" : "0.5" }} onClick={toggleLoop}>
      &
    </button>
  )
}
export default AudioPlayer
