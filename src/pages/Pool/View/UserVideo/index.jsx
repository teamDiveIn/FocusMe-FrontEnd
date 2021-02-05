import { OpenViduVideo } from '../OvVideo'

export const UserVideo = ({ streamManager, onPlay }) => {
  return (
    <div>
      {streamManager !== undefined ? (
        <OpenViduVideo streamManager={streamManager} onPlay={onPlay} />
      ) : null}
    </div>
  )
}
