import React from "react";
import { BsThreeDots } from "react-icons/bs";
// import { GoDotFill } from "react-icons/go";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import ChannelLogo from "./ChannelLogo";
import usePublishTime from "../utils/usePublishTime";

const SearchVideoCard = ({ item }) => {
  console.log(item);
  const { snippet } = item;
  const {
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    title,
    channelId,
  } = snippet;

  const publishTime = usePublishTime(publishedAt);

  //   console.log(snippet);
  return (
    <div className="video-card-container   transition ease-linear delay-150  duration-200 w-[66svw] md:w-[84svw]  md:h-fit xl:h-fit lg:h-fit h-fit   my-1 rounded-2xl grid grid-flow-col grid-cols-12 gap-2 sm:flex sm:flex-col sm:gap-0  sm:my-0 sm:w-fit sm:h-80  ">
      <div className="thumbnail-container rounded-xl   w-full md:h-40 h-[16.8rem]  items-center sm:m-1 m-2 col-span-5 overflow-hidden hover:rounded-sm transition-all ease-linear delay-100 duration-150 sm:w-96 sm:h-52 lg:h-[11rem] xl:h-52 2xl:h-[14.5rem] ">
        <img
          src={thumbnails.high.url}
          alt="thumbnail"
          className="  w-full h-full sm:w-full sm:h-full   object-center object-cover "
        />
      </div>
      <div className="video-details sm:w-96  h-24  font-medium my-1  col-span-6 sm:m-0  md:ml-2 xl:ml-2 ml-2">
        <div className="channel-details  overflow-hidden ">
          <div className="title text-base md:text-sm font-thin my-1 line-clamp-2 sm:text-sm sm:pl-2">
            {title}
          </div>
          <div className="sm:flex sm:items-center sm:gap-4 ">
            <div className="check-logo  gap-2 items-center font-normal flex  my-1 sm:my-0 sm:pl-1 ">
              <Link to={"/channel?id=" + channelId} key={channelId}>
                <div className="channelName text-[13px] flex items-center gap-2 ">
                  <ChannelLogo channelId={channelId} />
                  <p className="text-gray-500 dark:text-stone-200">
                    {channelTitle}
                  </p>
                </div>
              </Link>
              <div>
                <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem] " />
              </div>
            </div>
            <div className="view-and-time      items-center text-[13px] font-normal text-gray-500">
              <div className="time-ago dark:text-stone-200 dark:font-thin dark:text-[13px]">
                {publishTime}
              </div>
            </div>
          </div>
          <div className="text-[11.5px] font-thin text-gray-500 dark:text-stone-200 mt-5 sm:hidden md:hidden">
            {description}
          </div>
        </div>
      </div>
      <div className=" items-start my-2 m-2 col-span-1 py-1 sm:hidden">
        <BsThreeDots className="rotate-90 " />
      </div>
    </div>
  );
};

export default SearchVideoCard;
