import React from "react";

const PlaylistCards = ({ item }) => {
  const { snippet } = item;
  const { localized, thumbnails } = snippet;

  return (
    <div className="playlist-cardContainer py-2 px-1 w-[16.2rem] sm:w-fit sm:h-64 h-56 my-1 rounded-2xl dark:hover:bg-gray-800 dark:hover:text-white sm:bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="playlist-thumbnail-container w-64 h-36 sm:w-96 sm:h-48 rounded-2xl">
        <img
          src={thumbnails.high.url}
          alt=""
          className="w-full h-full  rounded-2xl object-cover object-center"
        />
      </div>
      <div className="playlist-Card-details mt-2">
        <p className="text-sm font-medium my-1 px-1">{localized.title}</p>
        <p className="text-xs text-gray-800 font-medium px-1 dark:text-gray-200 ">
          view full playlist
        </p>
      </div>
    </div>
  );
};

export default PlaylistCards;
