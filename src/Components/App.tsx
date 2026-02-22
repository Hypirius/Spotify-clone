import { useState, useEffect } from "react"
import SongForm from "./SongForm"
import AudioPlayer from "./AudioPlayer/AudioPlayer"

function App() {
  const [search, setSearch] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setIsError(null)

    const controller = new AbortController()
    async function fetchSongResult() {
      try {
        const response = await fetch("/test.json", {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
      } catch (error) {
        setIsError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSongResult()

    return () => controller.abort()
  }, [search])

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <SongForm query={search} setQuery={setSearch} />
      <AudioPlayer />
      <section id="searched-songs-container"></section>
    </main>
  )
}

export default App
