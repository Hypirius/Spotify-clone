import type { Dispatch, ReactNode, RefObject, SetStateAction } from "react"

export type changeTimeFn = (time?: number) => void

export type handleOnEndedFn = (ended: boolean) => void

export type AudioSourceProps = {
  songData: string
  audioRef: RefObject<HTMLAudioElement | null>
  setAudioProgress: Dispatch<SetStateAction<number>>
  setAudioDuration: Dispatch<SetStateAction<number>>
  onEnded: handleOnEndedFn
}

export type TimeControlProps = {
  action: "forwards" | "backwards"
  children: ReactNode
  changeTimeFn: changeTimeFn
  currentAudioProgress: number
  audioDuration?: number
}
