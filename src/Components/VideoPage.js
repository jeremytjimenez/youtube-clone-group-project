import React from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'

function VideoPage({ currentVideo }) {
  const params = useParams()

  return (
    <div>
        <YouTube videoId={params.id} />
        <section>
            <p><span>{currentVideo.snippet.channelTitle}</span> - {currentVideo.snippet.title}</p>
        </section>
    </div>
  )
}

export default VideoPage