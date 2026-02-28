import type { Dispatch, SetStateAction } from "react"

interface SongFormProps {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

function SongForm({ query, setQuery }: SongFormProps) {
  return (
    <form>
      <label htmlFor="song-search" className="mr-2">
        Song:
      </label>
      <input
        type="text"
        required
        placeholder="Enter song name"
        id="song-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

export default SongForm
