import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// API Key : AIzaSyB0z7UAHcQgSY6sw8SHBNkpbW5Ei9TMRXI
export default App;
