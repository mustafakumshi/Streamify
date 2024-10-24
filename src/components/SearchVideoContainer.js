import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { SearchPageShimmer } from "./Shimmer";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import { GOOGLE_API_KEY } from "../utils/Constants";

const SearchVideoContainer = () => {
  const [searchVideo, setSearchVideo] = useState([]);
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const VIDEO_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${GOOGLE_API_KEY}`;

  const searchVideos = useCallback(async () => {
    const data = await fetch(VIDEO_SEARCH_API);
    const jsonData = await data.json();
    setSearchVideo(jsonData.items);
  }, [VIDEO_SEARCH_API]);
  useEffect(() => {
    searchVideos();
  }, [searchVideos]);

  // console.log(searchVideo);
  if (searchVideo?.length === 0) {
    return <SearchPageShimmer />;
  } else {
    if (isMenuOpen) {
      return (
        <div className="relative z-0">
          <div className="flex flex-col w-full absolute top-16 left-24 sm:left-3 md:left-0">
            <div className="overflow-x-hidden overflow-y-hidden my-1  fixed top-14 left-[20%] sm:left-0  sm:w-[98%] md:w-[98%] md:left-2 lg:w-[75%] w-[70%] z-50 bg-white dark:bg-black ">
              <ButtonList />
            </div>

            <div className="grid grid-flow-row  gap-1 absolute top-10 left-[20%] sm:left-0 md:left-10 justify-center  m-auto  ">
              {searchVideo &&
                searchVideo.map((video) => (
                  <>
                    {video.id.videoId ? (
                      <Link
                        to={"/watch?v=" + video.id.videoId}
                        key={video.id.videoId}
                      >
                        <SearchVideoCard item={video} />
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative z-0">
          <div className="flex flex-col w-full absolute top-16 left-24 sm:left-3 md:left-0 ">
            <div className="overflow-x-hidden   overflow-y-hidden my-1  fixed top-14 left-[14rem] sm:left-0  sm:w-[98%] md:w-[98%] lg:w-[75%] md:left-2 w-[83%] z-50 bg-white   ">
              <ButtonList />
            </div>

            <div className="grid grid-flow-row  gap-1 absolute top-10 left-[20%] sm:left-0 md:left-10   justify-center  m-auto ">
              {searchVideo.map((video) => (
                <>
                  {video.id.videoId ? (
                    <Link
                      to={"/watch?v=" + video.id.videoId}
                      key={video.id.videoId}
                    >
                      <SearchVideoCard item={video} />
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
};

export default SearchVideoContainer;
