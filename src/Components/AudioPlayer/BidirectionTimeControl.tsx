import type { ReactNode } from "react"
import type { changeTimeFn } from "../../lib/types"

type TimeControlProps = {
  action: "forwards" | "backwards"
  children: ReactNode
  changeTimeFn: changeTimeFn
  currentAudioProgress: number
  audioDuration?: number
}

export default function BidirectionTimeControl({
  action,
  children,
  changeTimeFn,
  currentAudioProgress,
  audioDuration,
}: TimeControlProps) {
  let time: number

  if (
    action === "forwards" &&
    audioDuration &&
    currentAudioProgress + 15 < audioDuration - 0.1
  ) {
    time = currentAudioProgress + 15
  } else if (action === "backwards" && currentAudioProgress - 15 > 0 + 0.1) {
    time = currentAudioProgress - 15
  }

  return (
    <button className={`${action}`} onClick={() => changeTimeFn(time)}>
      {children}
    </button>
  )
}
