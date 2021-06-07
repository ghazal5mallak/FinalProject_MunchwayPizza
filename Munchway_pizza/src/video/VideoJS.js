import React, { Component } from 'react';
// import React from "react";
import VideoPlayer from "react-video-js-player";
import Video from "./v.mp4";
import "./Video.css";

  const VideoJS = () => {
  const videoSrc = Video;
  const poster="image/42.jpeg"
  return(
    <div className="App">
    <VideoPlayer src={videoSrc} poster={poster} 
playbackRates={[0.5, 1, 1.5, 2]}
    />
    </div>
  );
};
export default VideoJS;
