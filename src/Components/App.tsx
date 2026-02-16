import { useState } from "react"
import "./App.css"
import SongForm from "./SongForm"

function App() {
  const [search, setSearch] = useState<string>("")
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <SongForm query={search} setQuery={setSearch} />
      <section id="searched-songs-container"></section>
    </main>
  )
}

export default App
