import type { ChangeEvent } from "react"
import type { changeTimeFn } from "../../lib/types"

type ProgressBarProps = {
  progression: number
  duration: number
  changeTime: changeTimeFn
}

export default function ProgressBar({
  progression,
  duration,
  changeTime,
}: ProgressBarProps) {
  function handleSlide(event: ChangeEvent<HTMLInputElement>) {
    changeTime(Number(event.target.value))
  }
  return (
    <div id="progress-bar">
      <input
        type="range"
        min="0"
        max={duration}
        value={progression}
        onChange={handleSlide}
      />
    </div>
  )
}
