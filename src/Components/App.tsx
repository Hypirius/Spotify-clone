import { useState } from "react"
import SongForm from "./SongForm"
import AudioPlayer from "./AudioPlayer/AudioPlayer"
import useDebouce from "../hooks/useDebouce"
import useFetchData from "../hooks/useFetchData"
import SongList from "./SongList"

function App() {
  const [search, setSearch] = useState<string>("")
  const throttledInput = useDebouce(search, 500)
  const [isLoading, error, data] = useFetchData(throttledInput)
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null)

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      {!selectedAudio ? (
        <SongForm query={search} setQuery={setSearch} />
      ) : (
        <AudioPlayer audioLink={selectedAudio} selectAudio={setSelectedAudio}/>
      )}
      {isLoading && !error && <div>Loading...</div>}
      {error && !isLoading && <div>{error}</div>}
      {data && !selectedAudio && (
        <SongList tracks={data["data"]} selectAudio={setSelectedAudio} />
      )}
      <section id="searched-songs-container"></section>
    </main>
  )
}

export default App
