import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/Constants";
import PlaylistItems from "./PlaylistItems";

const PlaylistItemsContainer = () => {
  const [playlistItems, setPlaylistItem] = useState([]);
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get("playlistId");

  const PLAYLIST_ITEM_API = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${GOOGLE_API_KEY}`;

  const getPlaylistItem = useCallback(async () => {
    const data = await fetch(PLAYLIST_ITEM_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setPlaylistItem(jsonData.items);
  }, [PLAYLIST_ITEM_API]);

  useEffect(() => {
    getPlaylistItem();
  }, [getPlaylistItem]);

  return (
    <div className="absolute p-1 top-20 left-72 w-[60svw] sm:left-3 md:left-3 sm:w-[90svw] md:w-[90svw] flex flex-col   ">
      {playlistItems.map((playlist) => (
        <Link to={"/watch?v=" + playlist.snippet.resourceId.videoId}>
          <PlaylistItems items={playlist} />
        </Link>
      ))}
    </div>
  );
};

export default PlaylistItemsContainer;
