import type { setSelectedAudioFn } from "../../lib/types"

export default function GoBackBtn({
  selectAudio,
}: {
  selectAudio: setSelectedAudioFn
}) {
  return <div onClick={() => selectAudio(null)}>Go back</div>
}
