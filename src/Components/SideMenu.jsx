"use client";
import React, { useState } from "react";
import SideItemCard from "../Components/SideItemCard";
import Image from "next/image";
import coolImage from "../assets/howimg.jpg";
import image from "../assets/worldimg.jpg";
import { Data } from "@/lib/data";

const SideMenu = ({ SideMenuItems, filterItems, setItem, setShow }) => {
  const [selectedLink, setSelectedLink] = useState(null);
  // const handleLinkClick = (val) => {
  //   filterItems(val);
  //   setShow(1);
  //   setSelectedLink(val);
  // };

  return (
    <>
      <div className="flex flex-col flex-1 gap-2">
        <div className="bg-zinc-900 rounded-lg flex-1 ">
          <a
            // href=""
            onClick={() => {
              setItem(Data);
              setShow(0);
              setSelectedLink(Data);
            }}
            className={`playlist-item cursor-pointer flex group relative p-2 overflow-hidden items-center gap-2 rounded-md shadow-lg hover:shadow-xl outline-none
            ${
              selectedLink === Data
                ? "bg-zinc-500/10 text-white"
                : "hover:bg-zinc-500/10 focus:bg-zinc-500/50 text-white text-opacity-50 "
            }`}
            data-color="transparent"
          >
            <div className="h-8 w-8 flex-none" style={{ marginLeft: "9px" }}>
              <Image
                src={image}
                className="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                alt="mk"
              />
            </div>
            <div className="flex flex-auto flex-col truncate">
              <div className="font-light w-full flex-none text-sm truncate">
                All
              </div>
            </div>
          </a>
          <ul className="pl-2 pr-2">
            {/* mapping */}
            {SideMenuItems.map((val, key) => {
              return (
                <a
                  onClick={() => {
                    filterItems(val);
                    setShow(1);
                    setSelectedLink(val);
                  }}
                  // onClick={handleLinkClick(val)}
                  key={key}
                  id="playlistLink"
                  // href={`/playlist/${Playlist.id}`}
                  // className="playlist-item cursor-pointer flex group relative p-2 overflow-hidden items-center gap-2 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50"
                  data-color="transparent"
                  className={`playlist-item cursor-pointer flex group relative p-2 overflow-hidden items-center gap-2 rounded-md shadow-lg hover:shadow-xl outline-none 
                  ${
                    selectedLink === val
                      ? "bg-zinc-500/10 text-white"
                      : "hover:bg-zinc-500/10 focus:bg-zinc-500/50 text-white text-opacity-50"
                  }`}
                >
                  <div className="h-8 w-8 flex-none">
                    <Image
                      src={coolImage}
                      alt="hello"
                      className="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                    />
                  </div>
                  <div className="flex flex-auto flex-col truncate">
                    <div className="font-light w-full flex-none text-sm truncate">
                      {val}
                    </div>
                  </div>
                </a>
              );
            })}
            {/* <SideItemCard /> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
