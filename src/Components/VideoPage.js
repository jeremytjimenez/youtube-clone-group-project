import React from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'

function VideoPage() {
  const params = useParams()

//   const opts: YouTubeProps['opts'] = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

  return (
    <div>
        <YouTube videoId={params.id} />
    </div>
  )
}

export default VideoPage