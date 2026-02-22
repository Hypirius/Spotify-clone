import { useState } from "react"

type LoopAudioProps = {
  loopAudio: (state: boolean) => void
}

export default function LoopAudio({ loopAudio }: LoopAudioProps) {
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
