import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ChannelDetails = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return Math.round(viewCount / 1000) + "K";
    } else {
      return viewCount.toString();
    }
  }

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (item?.length === 0) {
  } else {
    const [{ snippet, statistics, id }] = item;
    const { description, localized, thumbnails, customUrl } = snippet;
    const { title } = localized;
    const { subscriberCount, videoCount } = statistics;
    // console.log(snippet);

    return (
      <div className="flex flex-col  pl-5">
        <div className="channelDetails-container sm:w-[94svw]  w-[80svw] mx-auto mb-4">
          <div className="flex sm:gap-2 items-center  w-full gap-4 ">
            <div className="channelImg-container sm:w-20 sm:h-20 w-72 h-fit rounded-full ">
              <img
                src={thumbnails.high.url}
                alt=""
                className="w-full h-full  rounded-full object-cover object-center"
              />
            </div>
            <div className="details-container flex flex-col gap-1 ">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-[11.5px] font-thin">{customUrl}</p>
              <div className="flex gap-2 items-center">
                <p className="text-[11.5px] font-thin">
                  {formatViews(subscriberCount)} subscribers
                </p>
                <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                <p className="text-[11.5px] font-thin">
                  {formatViews(videoCount)} videos
                </p>
              </div>
              <div className="description-container sm:hidden ">
                <div className="text-xs font-normal whitespace-pre-line  flex items-end justify-start sm:text-[11.5px] my-2 ">
                  <span className={isExpanded ? "" : "line-clamp-2"}>
                    {description}
                  </span>
                  {description.split("\n").length > 2 && (
                    <span>
                      <button
                        onClick={toggleExpansion}
                        className="text-gray-800 font-semibold dark:text-white"
                      >
                        {isExpanded ? "Show less" : "...more"}
                      </button>
                    </span>
                  )}
                </div>
              </div>
              <div className="sebscribe-join-btn-container flex   mt-4 sm:hidden md:hidden">
                <button className=" font-medium text-xs rounded-2xl py-[0.45rem] px-4  md:w-[50%] w-[150px] h-fit  bg-gray-800 text-white dark:bg-stone-200 dark:text-gray-800 dark:font-medium ">
                  Subscribe
                </button>
                <button className="text-white font-medium text-xs bg-gray-800 rounded-2xl py-[0.45rem] px-4  w-[150px] h-fit mx-4 dark:bg-stone-200 dark:text-gray-800 dark:font-medium ">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="description-container md:hidden lg:hidden xl:hidden 2xl:hidden">
            <div className="text-xs font-normal whitespace-pre-line  flex items-end justify-start sm:text-[11.5px] my-2 ">
              <span className={isExpanded ? "" : "line-clamp-2"}>
                {description}
              </span>
              {description.split("\n").length > 2 && (
                <span>
                  <button
                    onClick={toggleExpansion}
                    className="text-gray-800 font-semibold dark:text-white"
                  >
                    {isExpanded ? "Show less" : "...more"}
                  </button>
                </span>
              )}
            </div>
          </div>
          <div className="sebscribe-join-btn-container flex sm:justify-between items-center mt-4 lg:hidden xl:hidden 2xl:hidden">
            <button className=" font-medium text-xs rounded-2xl py-[0.45rem] px-4 sm:w-[50%] md:w-[50%] w-fit h-fit mx-4 bg-gray-800 text-white dark:bg-stone-200 dark:text-gray-800 dark:font-medium sm:justify-items-end">
              Subscribe
            </button>
            <button className="text-white font-medium text-xs bg-gray-800 rounded-2xl py-[0.45rem] px-4 sm:w-[50%] md:w-[50%] w-fit h-fit mx-4 dark:bg-stone-200 dark:text-gray-800 dark:font-medium sm:justify-items-end">
              Join
            </button>
          </div>
        </div>
        <div className="flex gap-10 sm:gap-6 ml-10 ">
          <NavLink
            to={"/channel?id=" + id}
            className={({ isActive }) =>
              `  ${
                isActive
                  ? " flex items-center text-base border-b-2  font-semibold dark:text-white"
                  : "bg-white flex items-center text-base    dark:bg-black dark:text-white"
              } px-4 `
            }
          >
            <button>Videos</button>
          </NavLink>
          <NavLink
            to={"/playlist?id=" + id}
            className={({ isActive }) =>
              `  ${
                isActive
                  ? " flex items-center text-base border-b-2 font-semibold dark:text-white"
                  : "bg-white flex items-center text-base   dark:bg-black dark:text-white"
              } px-4 `
            }
          >
            <button>PlayLists</button>
          </NavLink>
        </div>
      </div>
    );
  }
};

export default ChannelDetails;
