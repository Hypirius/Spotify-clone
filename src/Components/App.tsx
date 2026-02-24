import { useState } from "react"
import SongForm from "./SongForm"
// import AudioPlayer from "./AudioPlayer/AudioPlayer"
import useDebouce from "../hooks/useDebouce"
import useFetchData from "../hooks/useFetchData"

function App() {
  const [search, setSearch] = useState<string>("")
  const throttledInput = useDebouce(search, 500)
  const [isLoading, error, data] = useFetchData(throttledInput)

  console.log(data, isLoading, error)

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <SongForm query={search} setQuery={setSearch} />
      {isLoading && !error && <div>Loading...</div>}
      {error && !isLoading && <div>{error}</div>}
      {/* <AudioPlayer /> */}
      <section id="searched-songs-container"></section>
    </main>
  )
}

export default App
