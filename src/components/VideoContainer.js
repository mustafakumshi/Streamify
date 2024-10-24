import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/menuBarSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log(jsonData.items[0].snippet.title);
    setVideos(jsonData.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  // console.log(videos);
  if (videos?.length === 0) {
    return <ShimmerMenu />;
  } else {
    return (
      // <div className="relative">
      <div className="flex flex-wrap gap-1 justify-center w-full sm:left-0 dark:bg-black dark:text-white ">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard items={video} />
          </Link>
        ))}
      </div>
      // </div>
    );
  }
};

export default VideoContainer;
