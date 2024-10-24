import React from "react";
import usePublishTime from "../utils/usePublishTime";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const PlaylistItems = ({ items }) => {
  console.log(items);

  const { snippet } = items;
  const { channelId, thumbnails, channelTitle, publishedAt, title } = snippet;
  const publishTime = usePublishTime(publishedAt);
  return (
    <div className="w-full h-fit  m-1 sm:m-1 flex gap-3 hover:bg-gray-100 rounded-xl px-2 py-1 dark:hover:bg-gray-800 dark:hover:text-white  ">
      <div className="left-side-img-container w-56 h-[5.6rem] sm:w-56  sm:h-[4.8rem] md:w-60 md:h-[5.1rem] rounded-xl">
        <img
          src={thumbnails?.high?.url}
          alt=""
          className="w-full h-full rounded-xl object-cover object-center"
        />
      </div>
      <div className="right-side-container w-full ">
        <div className=" title-container pt-1">
          <p className="text-base font-medium sm:text-sm">{title}</p>
        </div>
        <div className="flex gap-4 text-[11.5px] font-thin">
          <Link to={"/channel?id=" + channelId}>
            <p>{channelTitle}</p>
          </Link>
          <p>{publishTime}</p>
        </div>
      </div>
      <div className=" -translate-y-6 -rotate-90 sm:hidden">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default PlaylistItems;
