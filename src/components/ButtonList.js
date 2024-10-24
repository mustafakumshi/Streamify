import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";

const List = [
  "All",
  "Hindi Music",
  "Bollywood",
  "Sony",
  "Live",
  "News",
  "South Movies",
  "Programming",
  "JavaScript",
  "DSA",
  "Sports",
  "ReactJs",
  "Albums",
  "Cricket",
  "Football",
  "Series",
  "laptops",
  "Iphones",
  "Cooking",
  "Sony",
  "Movies",
  "Anime",
  "Business",
  "Politics"
];

const TRANSLATE_AMOUNT = 200;

const ButtonList = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef(null);
  const [activeButton, setActiveButton] = useState("All");
  const location = useLocation();

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  useEffect(() => {
    const path = location.pathname.substring(1);
    const searchQuery = new URLSearchParams(location.search).get(
      "search_query"
    );
    if (path === "" && !searchQuery) {
      setActiveButton("All");
    } else if (searchQuery) {
      setActiveButton(searchQuery);
    } else {
      setActiveButton(path);
    }
  }, [location]);

  const handleActiveButton = (name) => {
    setActiveButton(name);
  };

  return (
    <div
      ref={containerRef}
      className=" overflow-x-hidden overflow-y-hidden relative dark:bg-black "
    >
      <div
        className="flex  whitespace-nowrap gap-3 transition-transform w-[max-content] mx-8 dark:bg-black"
        style={{ transform: `translateX(-${translate}px` }}
      >
        {List.map((name, index) => (
          <NavLink
            key={index}
            to={name === "All" ? "/" : `/category?search_query=${name}`}
          >
            <Button
              name={name}
              isActive={activeButton === name}
              onClick={() => handleActiveButton(name)}
            />
          </NavLink>
        ))}
      </div>

      {isLeftVisible && (
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-r from-white from-50%  to-transparent w-24 h-full 
          dark:bg-gradient-to-r dark:from-black dark:from-50%  dark:to-transparent"
        >
          <button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5  "
            onClick={() =>
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              })
            }
          >
            <BiChevronLeft className="w-5 h-5" />
          </button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-l from-white from-50%  to-transparent w-24 h-full flex justify-end dark:bg-gradient-to-l dark:from-black dark:from-50% dark:to-transparent">
          <button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5  "
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }

                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTranslate + width >= edge) {
                  return edge - width;
                }
                return newTranslate;
              });
            }}
          >
            <BiChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonList;
