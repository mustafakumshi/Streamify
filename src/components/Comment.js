import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleReply } from "../utils/commentSlice";
import usePublishTime from "../utils/usePublishTime";
// import { MdOutlineSort } from "react-icons/md";

const Comment = ({ item }) => {
  const [userProfile, setUserProfile] = useState();
  const [replyUserProfiles, setReplyUserProfiles] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // console.log(item);
  const {
    snippet: {
      topLevelComment: { snippet },
    },
    replies,
  } = item;

  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
  } = snippet;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  // console.log(replies?.comments);
  // const hasReplies = replies && replies.comments && replies.comments.length > 0;

  const getauthorProfileImageUrl = useCallback(async () => {
    const data = await fetchImage(authorProfileImageUrl);
    setUserProfile(data);
    if (replies?.comments) {
      const replyProfiles = await Promise.all(
        replies.comments.map(async (reply) => {
          const replyData = await fetchImage(
            reply.snippet?.authorProfileImageUrl
          );
          return {
            profileUrl: replyData,
            authorDisplayName: reply.snippet.authorDisplayName,
            textOriginal: reply.snippet.textOriginal,
          };
        })
      );
      setReplyUserProfiles(replyProfiles);
    }
  }, [authorProfileImageUrl, replies]);

  useEffect(() => {
    getauthorProfileImageUrl();
  }, [getauthorProfileImageUrl]);

  const fetchImage = async (imageUrl) => {
    try {
      const data = await fetch(imageUrl);
      const imageBlob = await data.blob();
      return URL.createObjectURL(imageBlob);
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  const dispatch = useDispatch();
  const handleReplies = () => {
    dispatch(toggleReply());
    // console.log("dispatched");
  };

  const isReplyOpen = useSelector((store) => store.comment.isReplyOpen);
  // console.log(isReplyOpen);
  const publishTime = usePublishTime(publishedAt);

  return (
    <div className="comment-container grid grid-flow-col grid-cols-12  w-full overflow-hidden ">
      <div className="image-container  ">
        <div className="flex justify-center   w-full h-full ">
          {userProfile && (
            <img
              src={userProfile}
              alt="User Profile"
              className="w-10 h-10 sm:w-7 sm:h-7 rounded-full"
            />
          )}
        </div>
      </div>
      <div className=" col-span-12">
        <div className="flex flex-col gap-1   ">
          <div className="user-details flex gap-2 items-center">
            <h2 className="text-xs font-medium">{authorDisplayName}</h2>
            <p className="text-xs text-gray-600 dark:text-stone-200 dark:font-thin">
              {publishTime}
            </p>
          </div>

          <div className="text-xs font-normal whitespace-pre-line  flex items-end justify-start sm:text-[11.5px] ">
            <span className={isExpanded ? "" : "line-clamp-2"}>
              {textOriginal}
            </span>
            {textOriginal.split("\n").length > 2 && (
              <span>
                <button
                  onClick={toggleExpansion}
                  className="text-gray-800 font-semibold"
                >
                  {isExpanded ? "Show less" : "...more"}
                </button>
              </span>
            )}
          </div>

          <div className="comment-like-unlike flex gap-3 items-center my-1 ">
            <div className="flex">
              <AiOutlineLike className="w-5 h-5" />
              <p className="text-xs text-gray-500 mx-1 dark:text-stone-200">
                {likeCount}
              </p>
            </div>
            <BiDislike className="w-[1.15rem] h-[1.15rem]  text-gray-700 dark:text-stone-200" />
            {replies?.comments?.length > 0 ? (
              <div className="flex justify-center items-center mx-3">
                <Link
                  className="text-blue-800 text-xs font-medium"
                  onClick={handleReplies}
                >
                  {replies.comments.length} replies
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          {isReplyOpen && (
            <div className="reply-container ">
              {replyUserProfiles.map((reply, index) => (
                <div key={index} className="reply flex gap-4  my-1 p-1">
                  <div className="flex justify-center">
                    <img
                      src={reply.profileUrl}
                      alt="Reply User Profile"
                      className="w-9 h-9 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium">
                      {reply.authorDisplayName}
                    </p>
                    <p className="text-xs sm:text-[11.5px]">
                      {reply.textOriginal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
