import { OpenViduVideo } from '../OvVideo'

export const UserVideo = ({ streamManager }) => {
  return (
    <div>
      {streamManager !== undefined ? <OpenViduVideo streamManager={streamManager} /> : null}
    </div>
  )
}
