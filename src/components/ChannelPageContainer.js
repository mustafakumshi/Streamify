import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ChannelDetails from "./ChannelDetails";
import ChannelVideos from "./ChannelVideos";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/Constants";
import PlaylistContainer from "./PlaylistContainer";

const ChannelPageContainer = () => {
  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  //   const [channelInfo, setChannelInfo] = useState();
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("id");

  const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`;
  const VIDEOS_BY_CHANNEL_API = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`;

  const getChannelDetails = useCallback(async () => {
    const data = await fetch(CHANNEL_DETAILS_API);
    const jsonData = await data.json();
    // console.log(jsonData.items);
    setChannelDetails(jsonData.items);
  }, [CHANNEL_DETAILS_API]);

  const getChannelVideos = useCallback(async () => {
    const data = await fetch(VIDEOS_BY_CHANNEL_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setChannelVideos(jsonData.items);
  }, [VIDEOS_BY_CHANNEL_API]);

  useEffect(() => {
    getChannelDetails();
    getChannelVideos();
  }, [getChannelDetails, getChannelVideos]);

  const location = useLocation();
  console.log(location);

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (channelVideos && channelDetails) {
    if (isMenuOpen) {
      return (
        <div className=" absolute top-20 left-52 sm:top-20 sm:p-2 md:left-0 sm:left-0  flex flex-col justify-center items-center ">
          <div className=" sm:w-[92svw]  border-b-2 w-[85svw]  flex items-start justify-start">
            <ChannelDetails item={channelDetails} />
          </div>
          {location.pathname === "/playlist" ? (
            <PlaylistContainer channelId={channelId} />
          ) : (
            <div className="  flex flex-wrap gap-1 sm:flex-col w-full justify-center mt-4 ">
              {channelVideos.map((video) => (
                <Link to={"/watch?v=" + video.id.videoId} key={video.id}>
                  <ChannelVideos video={video} key={video.id.videoId} />
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className=" absolute top-20 left-52 sm:top-20  sm:left-0 md:left-0 sm:p-2 flex flex-col justify-center items-center ">
          <div className=" border-b-2 sm:w-[92svw] w-[85svw] flex items-start justify-start ">
            <ChannelDetails item={channelDetails} />
          </div>
          {location.pathname === "/playlist" ? (
            <PlaylistContainer channelId={channelId} />
          ) : (
            <div className=" flex flex-wrap gap-1 sm:flex-col w-full justify-center mt-4 ">
              {channelVideos.map((video) => (
                <Link to={"/watch?v=" + video.id.videoId} key={video.id}>
                  <ChannelVideos video={video} key={video.id.videoId} />
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
  } else {
  }
};

export default ChannelPageContainer;
