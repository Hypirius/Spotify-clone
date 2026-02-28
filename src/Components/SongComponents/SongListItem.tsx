import type { setSelectedAudioFn } from "../../lib/types"

type SongListItemProps = {
  title: string
  id: number
  duration: number
  link: string
  artistName: string
  albumName: string
  albumCover: string
  albumAlt: string
  selectAudio: setSelectedAudioFn
}

export default function SongListItem({
  title,
  id,
  duration,
  link,
  artistName,
  albumName,
  albumCover,
  albumAlt,
  selectAudio,
}: SongListItemProps) {
  const minDuration = Math.round(duration / 60)
  return (
    <li
      className="flex justify-between items-center border-2"
      key={id}
      onClick={() => selectAudio(link)}>
      <div>
        <img src={albumCover} alt={albumAlt} />
      </div>
      <div className="text-center flex flex-col justify-center items-center flex-1">
        <p>{title}</p>
        <p>
          Song duration: {minDuration} {minDuration > 1 ? "mins" : "min"}
        </p>
        <p>Artist: {artistName}</p>
        <p>Album: {albumName}</p>
      </div>
    </li>
  )
}
