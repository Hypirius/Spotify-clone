import type { Dispatch, RefObject, SetStateAction } from "react"

export type changeTimeFn = (time?: number) => void
export type AudioSourceProps = {
  songData: string
  audioRef: RefObject<HTMLAudioElement | null>
  setAudioProgress: Dispatch<SetStateAction<number>>
  setAudioDuration: Dispatch<SetStateAction<number>>
  setIsEnded: Dispatch<SetStateAction<boolean>>
}
