import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
import ChannelLogo from "./ChannelLogo";
import usePublishTime from "../utils/usePublishTime";

const VideoByCategoryCard = ({ item }) => {
  const { snippet } = item;
  const { channelTitle, publishedAt, thumbnails, title, channelId } = snippet;

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  const publishTime = usePublishTime(publishedAt);

  //   console.log(snippet);
  return (
    <div>
      {isMenuOpen ? (
        <div className="video-card-container  group w-fit my-[0.40rem] px-2 py-3 rounded-2xl hover:bg-Video-card-color transition ease-linear delay-150  duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-800">
          <div className="video-card w-72 h-64 sm:w-96 sm:h-72 sm:my-1 md:w-80 md:h-64 md:my-2 transition ease-linear  ">
            <div className="thumbnail-continer rounded-2xl  sm:w-96 sm:h-52  h-40">
              <img
                src={thumbnails.high.url}
                alt="thumbnail"
                className="rounded-xl group-hover:rounded-sm transition-all delay-100 sm:w-full sm:h-full w-full h-full object-cover object-center"
              />
            </div>
            <div className="video-details flex py-2 font-medium">
              <ChannelLogo channelId={channelId} />

              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-[13.9px] my-1 line-clamp-2">
                  {title}
                </div>

                <div className="check-logo flex gap-1 items-center font-normal">
                  <div className="channelName text-[13px] text-gray-500 dark:text-stone-300">
                    {channelTitle}
                  </div>
                  <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem] text-gray-500 dark:text-stone-300" />
                </div>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-300">
                  <div className="time-ago">{publishTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="video-card-container group w-fit my-[0.40rem]  px-2 py-3 rounded-2xl hover:bg-Video-card-color transition ease-linear delay-150 duration-200 dark:bg-black dark:text-white dark:hover:bg-gray-800">
          <div className="video-card w-[16.5rem] h-60 sm:w-96 sm:h-72 sm:my-1 md:w-80 md:h-64 md:my-2 transition ease-linear  ">
            <div className="thumbnail-continer rounded-2xl h-36  sm:w-96 sm:h-52">
              <img
                src={thumbnails.high.url}
                alt="thumbnail"
                className="rounded-xl group-hover:rounded-sm transition-all object-cover object-center delay-100 w-full h-full sm:w-full sm:h-full"
              />
            </div>
            <div className="video-details flex py-2 font-medium w-full">
              <ChannelLogo channelId={channelId} />

              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-[13.9px] my-1 line-clamp-2">
                  {title}
                </div>

                <div className="check-logo flex gap-1 items-center font-normal">
                  <div className="channelName text-[13px] text-gray-500 dark:text-stone-300">
                    {channelTitle}
                  </div>
                  <MdCheckCircle className=" w-[0.8rem] h-[0.8rem] text-gray-500 dark:text-stone-300" />
                </div>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-300">
                  <div className="time-ago">{publishTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoByCategoryCard;
