import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const BackToTop = () => {
  const [] = useState();

  return (
    <div className="rounded-full bg-picton-blue-500 bg-opacity-75 z-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackToTop;
