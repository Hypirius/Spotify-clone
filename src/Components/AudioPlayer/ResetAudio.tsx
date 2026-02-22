export default function ResetAudio({
  handleReset,
}: {
  handleReset: () => void
}) {
  return <button onClick={() => handleReset()}>O</button>
}
