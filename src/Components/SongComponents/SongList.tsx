import type { TrackInfo, setSelectedAudioFn } from "../../lib/types"
import SongListItem from "./SongListItem"

type SongListProps = {
  tracks: TrackInfo[]
  selectAudio: setSelectedAudioFn
}

export default function SongList({ tracks, selectAudio }: SongListProps) {
  return (
    <ul>
      {tracks.map((currentTrack) => (
        <SongListItem
          title={currentTrack.title_short}
          id={currentTrack.id}
          duration={currentTrack.duration}
          link={currentTrack.preview}
          artistName={currentTrack.artist.name}
          albumName={currentTrack.album.title}
          albumCover={currentTrack.album.cover_small}
          albumAlt={currentTrack.album.title}
          selectAudio={selectAudio}
        />
      ))}
    </ul>
  )
}
