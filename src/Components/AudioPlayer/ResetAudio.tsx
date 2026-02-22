import type { changeTimeFn } from "../../lib/types"

type ResetAudioProps = {
  changeTime: changeTimeFn
}

export default function ResetAudio({ changeTime }: ResetAudioProps) {
  return <button onClick={() => changeTime()}>O</button>
}
