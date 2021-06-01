import "./videoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.channelId}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
