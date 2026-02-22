import type { changeTimeFn } from "../../lib/types"
import type { ChangeEvent } from "react"
export default function ProgressBar({
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
