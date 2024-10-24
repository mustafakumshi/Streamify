import React, { useCallback, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/Constants";
import PlaylistCards from "./PlaylistCards";
import { Link } from "react-router-dom";

const PlaylistContainer = ({ channelId }) => {
  const [playlists, setPlaylists] = useState([]);
  const PLAYLIST_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${GOOGLE_API_KEY}`;

  const getPlayListDetails = useCallback(async () => {
    const data = await fetch(PLAYLIST_DETAILS_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setPlaylists(jsonData.items);
  }, [PLAYLIST_DETAILS_API]);

  useEffect(() => {
    getPlayListDetails();
  }, [getPlayListDetails]);
  console.log(playlists.id);
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center sm:justify-center  mt-4  ">
      {playlists.map((playlist) => (
        <Link to={"/playlistItem?playlistId=" + playlist.id}>
          <PlaylistCards item={playlist} />
        </Link>
      ))}
    </div>
  );
};

export default PlaylistContainer;
