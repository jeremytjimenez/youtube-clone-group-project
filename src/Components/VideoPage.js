import React from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
import "./VideoPage.css";
function VideoPage({ currentVideo }) {
  const params = useParams()

  return (
    <div className="video-view">
        <YouTube videoId={params.id} />
        <section className="video-details">
            <p ><span>{currentVideo.snippet.channelTitle}</span> - {currentVideo.snippet.title}</p>
        </section>
    </div>
  )
}

export default VideoPage