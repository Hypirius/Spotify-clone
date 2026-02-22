import { useState } from "react"

export default function LoopAudio({
  loopAudio,
}: {
  loopAudio: (state: boolean) => void
}) {
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
