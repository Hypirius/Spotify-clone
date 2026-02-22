import type { TimeControlProps } from "../../lib/types"

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
    currentAudioProgress + 15 < audioDuration
  ) {
    time = currentAudioProgress + 15
  } else if (action === "backwards" && currentAudioProgress - 15 > 0) {
    time = currentAudioProgress - 15
  }

  return (
    <button className={`${action}`} onClick={() => changeTimeFn(time)}>
      {children}
    </button>
  )
}
