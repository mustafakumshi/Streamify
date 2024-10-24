import React from "react";
import YoutubeLogo from "../images/youtube-icon.svg";
import YoutubeStudio from "../images/youtube-studio.svg";
import YoutubeMusic from "../images/youtube-music.svg";
import YoutubeKids from "../images/YouTube Kids.png";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiFireLight } from "react-icons/pi";
import { PiMusicNoteThin } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbThin } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { HiMiniSignal } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  // console.log(isMenuOpen);
  if (isMenuOpen)
    return (
      <div className="sm:hidden md:hidden">
        <div className="flex flex-col fixed top-16 left-0 z-10  h-screen  dark:bg-black dark:text-white">
          <ul className="flex flex-col mx-2 my-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gray-100 flex flex-col items-center px-2 py-3 rounded-lg dark:bg-gray-700 dark:text-white"
                    : "bg-white flex flex-col items-center px-2 py-3 rounded-lg dark:bg-black dark:text-white"
                } hover:bg-gray-100 my-1`
              }
            >
              <GoHome className="w-5 h-5" />
              <h2 className="text-[10px] my-1">Home</h2>
            </NavLink>

            <NavLink
              to={"/results?search_query=reels"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-gray-100 flex flex-col items-center px-2 py-3 rounded-lg dark:bg-gray-800 dark:text-white"
                    : "bg-white flex flex-col items-center px-2 py-3 rounded-lg dark:bg-black dark:text-white"
                } hover:bg-gray-100 my-1`
              }
            >
              <SiYoutubeshorts className="w-5 h-5" />
              <h2 className="text-[10px] my-1">Shorts</h2>
            </NavLink>

            <li className="bg-white flex flex-col items-center px-2 py-3 rounded-lg dark:bg-black dark:text-white hover:bg-gray-100 my-1">
              <MdOutlineSubscriptions className="mx-2 w-5 h-5" />
              <h2 className="text-[10px] my-1">Subscriptions</h2>
            </li>

            <li className="bg-white flex flex-col items-center px-2 py-3 rounded-lg dark:bg-black dark:text-white hover:bg-gray-100 my-1">
              <MdOutlineVideoLibrary className="mx-2 w-5 h-5" />
              <h2 className="text-[10px] my-1">You</h2>
            </li>
          </ul>
        </div>
      </div>
    );
  else {
    return (
      <div className="absolute ">
        <div className="side-bar  h-screen bg-white w-56 md:w-44 overflow-y-scroll flex flex-col fixed top-16 left-0 z-10 dark:bg-black dark:text-white sm:absolute">
          <div className="Section-1 border-b border-gray-300 mx-2 ">
            <ul className=" mx-2 mb-2 mt-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `  ${
                    isActive
                      ? "bg-gray-100 flex items-center text-[14px]  py-2 pl-2 rounded-xl font-medium dark:bg-gray-800 dark:text-white"
                      : "bg-white flex items-center text-[14px]  py-2 pl-2 dark:bg-black dark:text-white"
                  } hover:bg-gray-100 hover:rounded-xl my-1 `
                }
              >
                <GoHome className="mx-2 w-4 h-4" />
                <h2 className="mx-3">Home</h2>
              </NavLink>
              <NavLink
                to={"/results?search_query=reels"}
                className={({ isActive }) =>
                  `  ${
                    isActive
                      ? "bg-gray-200 flex items-center text-[14px]  py-2 pl-2 rounded-xl font-medium dark:bg-gray-800 dark:text-white "
                      : "bg-white flex items-center text-[14px]  py-2 pl-2 dark:bg-black dark:text-white"
                  } hover:bg-gray-100 hover:rounded-xl my-1 dark:hover:bg-slate-800 dark:hover:text-white `
                }
              >
                <SiYoutubeshorts className="mx-2 w-4 h-4" />
                <h2 className="mx-3">Shorts</h2>
              </NavLink>

              <li className="bg-white flex items-center text-[14px]  py-2 pl-2 dark:bg-black dark:text-white hover:bg-gray-100 hover:rounded-xl my-1 dark:hover:bg-slate-800 dark:hover:text-white">
                <MdOutlineSubscriptions className="mx-2 w-4 h-4" />
                <h2 className="mx-3">Subscriptions</h2>
              </li>
            </ul>
          </div>
          <div className="Section-2 border-b border-gray-300 mx-2 ">
            <div className="Section-heading flex items-center ml-2  py-2 pl-3  mt-2 hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
              <h2 className="text-sm font-medium mx-1">You</h2>
              <GoChevronRight className="mx-2 w-4 h-4" />
            </div>
            <ul className=" mx-2 mb-2 ">
              <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white  ">
                <BiSolidUserAccount className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Your channel</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <GoHistory className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">History</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <RiPlayList2Line className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Playlist</h2>
              </li>
              <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <GoVideo className="mx-2 w-4 h-4" />
                <h2 className="mx-3   font-thin">Your videos</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <MdOutlineWatchLater className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Watch Later</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <AiOutlineLike className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Liked videos</h2>
              </li>
            </ul>
          </div>
          <div className="Section-3 border-b border-gray-300 mx-2 ">
            <div className="Section-heading flex items-center ml-2 mt-2 py-2 pl-3 dark:hover:bg-slate-800 dark:hover:text-white ">
              <h2 className="text-sm font-medium mx-1">Explore</h2>
            </div>
            <ul className=" mx-2 mb-2">
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <PiFireLight className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Trending</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <RiShoppingBag4Line className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Shopping</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white  ">
                <PiMusicNoteThin className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Music</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <PiFilmSlateDuotone className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Films</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <HiMiniSignal className="mx-2 w-4 h-4" />
                <h2 className="mx-3   font-thin">Live</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <SiYoutubegaming className="mx-2 w-4 h-4" />
                <h2 className="mx-3   font-thin">Gaming</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white  ">
                <PiNewspaperClippingLight className="mx-2 w-4 h-4" />
                <h2 className="mx-3 font-thin">News</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <TfiCup className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Sport</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <PiLightbulbThin className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Courses</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <GiHanger className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Fashion & beauty</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white  ">
                <MdPodcasts className="mx-2 w-4 h-4" />
                <h2 className="mx-3  font-thin">Podcasts</h2>
              </li>
            </ul>
          </div>
          <div className="Section-4 border-b border-gray-300 mx-2 ">
            <div className="Section-heading flex items-center ml-2 mt-2 py-2 pl-3  ">
              <h2 className="text-sm font-medium mx-1">More from YouTube</h2>
            </div>
            <ul className=" mx-2 mb-2">
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <img
                  src={YoutubeLogo}
                  alt="youtube-premium"
                  className="w-5 h-5 mx-2"
                />
                <h2 className="mx-2  font-thin">YouTube Premium</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <img
                  src={YoutubeStudio}
                  alt="youtube-studio"
                  className="w-5 h-5 mx-2"
                />
                <h2 className="mx-2  font-thin">YouTube Studio</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <img
                  src={YoutubeMusic}
                  alt="youtube-music"
                  className="w-5 h-5 mx-2"
                />
                <h2 className="mx-2 font-thin">YouTube Music</h2>
              </li>
              <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <img
                  src={YoutubeKids}
                  alt="youtube-kids"
                  className="w-4 h-4 ml-2 mr-2"
                />
                <h2 className="mx-2 font-thin">YouTube Kids</h2>
              </li>
            </ul>
          </div>
          <div className="Section-5 border-b border-gray-300 mx-2 ">
            <ul className=" mx-2 my-2">
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <IoSettingsOutline className="w-4 h-4 mx-2" />
                <h2 className="mx-3  font-thin">Settings</h2>
              </li>

              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <RiFlagLine className="w-4 h-4 mx-2" />
                <h2 className="mx-3 font-thin">Report history</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <IoMdHelpCircleOutline className="w-4 h-4 mx-2" />
                <h2 className="mx-3  font-thin">Help</h2>
              </li>
              <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl dark:hover:bg-slate-800 dark:hover:text-white ">
                <RiFeedbackLine className="w-4 h-4 mx-2" />
                <h2 className="mx-3  font-thin">Send feedback</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default SideBar;
