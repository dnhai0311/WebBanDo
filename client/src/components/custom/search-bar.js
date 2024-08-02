"use client";

import React, { useRef } from "react";
import { Button } from "../ui/button";

const SearchBar = () => {
  const inputRef = useRef(null);

  const handleMouseEnter = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <Button
      onMouseEnter={handleMouseEnter}
      className="bg-white dark:bg-black absolute px-3 group -bottom-[40px] left-1/2 translate-x-[100px] lg:bottom-auto lg:left-auto lg:translate-x-0 lg:relative"
      variant="ghost"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.6em"
        height="1.6em"
        viewBox="0 0 32 32"
        className="transition-transform duration-300"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
        />
      </svg>
      <input
        id="input-search"
        type="text"
        ref={inputRef}
        placeholder="Bạn tìm kiếm gì nào..."
        className="translate-x-[5px] rounded-tl-[8px] rounded-bl-[8px] absolute right-full h-full px-10 transition-transform duration-300 transform lg:scale-x-0 lg:group-hover:scale-x-100 lg:origin-right"
      />
    </Button>
  );
};

export default SearchBar;
