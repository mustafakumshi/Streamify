import React from "react";
import usePublishTime from "../utils/usePublishTime";

const ChannelVideos = ({ video }) => {
  // console.log(video);
  const { snippet } = video;
  const { thumbnails, title, publishedAt } = snippet;

  const publishTime = usePublishTime(publishedAt);

  //   console.log(snippet);
  return (
    <div className="channel-video-container sm:px-2 sm:py-1 md:px-2 md:py-1 hover:bg-gray-100 rounded-2xl m-1 dark:hover:bg-gray-900 dark:hover:text-white px-2 py-2">
      <div className="videocard  sm:grid sm:grid-cols-12  sm:w-[90svw] sm:h-full sm:my-1 w-[16.5rem] md:w-96 md:h-72  rounded-2xl">
        <div className="thumbnail-container sm:col-span-7 sm:h-[8.3rem] md:h-52 rounded-2xl hover:rounded-sm h-[9.3rem] ">
          <img
            src={thumbnails.high.url}
            alt=""
            className="sm:w-full sm:h-full  h-full w-full object-cover object-center rounded-2xl hover:rounded-sm transition-all delay-100 ease-linear duration-150"
          />
        </div>
        <div className="sm:col-span-5 mt-2 px-2">
          <div className="flex flex-col">
            <p className="text-xs font-medium line-clamp-2 my-1">{title}</p>
            <p className="text-[11.5px] font-thin">{publishTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelVideos;
