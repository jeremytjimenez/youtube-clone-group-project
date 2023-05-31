import React from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'

function VideoPage() {
  const params = useParams()

  return (
    <div>
        <YouTube videoId={params.id} />
    </div>
  )
}

export default VideoPage