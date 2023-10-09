// import avatar from "/avatar.png";
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../util/useMediaQuery";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  console.log(matches);

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        width="250"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img
          className="w-20"
          src="https://res.cloudinary.com/niikkoo/image/upload/v1696883945/misc/Nico_portraits_2019-_hra29x.jpg"
          alt="Profile picture"
        />
      </div>
      <h1 className="text-lg font-bold">
        <a href="/">Nicolas Rocagel</a>
      </h1>
      {matches && (
        <div className="flex gap-12">
          <a href="/">home</a>
          <a href="/projects">Projects</a>
          <a href="/contact">contact </a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1 cursor-pointer xl:hidden z-50"
        >
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-6 bg-black"></span>
          <span className="block h-0.5 w-4 bg-black"></span>
        </div>
      )}
      {toggled && !matches && (
        <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <div className="flex flex-col gap-24 text-lg">
            {" "}
            <a href="/">home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">contact </a>
          </div>{" "}
        </div>
      )}
    </nav>
  );
}
