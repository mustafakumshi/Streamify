import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <div className="button-container">
      <button
        className={`my-[0.35rem] py-1 px-3 rounded-lg text-[14px] font-medium ${
          isActive
            ? "bg-stone-700 text-white dark:bg-slate-100 dark:text-black"
            : "bg-button-list-color text-black dark:bg-stone-800 dark:text-white dark:hover:bg-gray-700"
        } `}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
