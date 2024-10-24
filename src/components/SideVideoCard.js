import React from "react";
import { GoDotFill } from "react-icons/go";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import usePublishTime from "../utils/usePublishTime";

const SideVideoCard = ({ items }) => {
  // console.log(items);

  const { snippet, statistics } = items;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return Math.round(viewCount / 1000) + "K";
    } else {
      return viewCount.toString();
    }
  }

  const publishTime = usePublishTime(publishedAt);

  // console.log(isMenuOpen);
  return (
    <div className=" w-full ">
      <div className="video-card-container group w-full h-full my-2 px-2 rounded-2xl  transition ease-linear delay-150  duration-200   ">
        <div className="video-card w-[100%] h-fit transition ease-linear  grid grid-flow-col grid-cols-12 gap-2  ">
          <div className="thumbnail-container rounded-2xl  h-28  col-span-6 items-center">
            <img
              src={thumbnails.medium.url}
              alt="thumbnail"
              className="rounded-xl  transition-all delay-100 w-full h-full "
            />
          </div>
          <div className="video-details flex  h-full  font-medium col-span-6">
            <div className="channel-details flex flex-col overflow-hidden ">
              <div className="title text-xs mt-1 mb-2 line-clamp-2">
                {title}
              </div>
              <Link to={"/channel?id=" + channelId} key={channelId}>
                <div className="check-logo flex gap-1 items-center font-normal   ">
                  <div className="channelName text-[13px] text-gray-500 dark:text-stone-200 dark:font-thin dark:text-[12px]">
                    {channelTitle}
                  </div>
                  <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem]" />
                </div>
              </Link>
              <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-200">
                {formatViews(viewCount)} views
                <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                <div className="time-ago dark:text-stone-200">
                  {publishTime}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start my-2 ">
            <BsThreeDots className="rotate-90 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideVideoCard;
