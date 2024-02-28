import React from "react";
// import PlaylistItemCard from "./PlaylistItemCard";
import coolImage from "../assets/howimg.jpg";

import Image from "next/image";
const Index = ({ item }) => {
  return (
    <>
      <div
        style={{ minHeight: "300px", background: "rgba(24 ,24 ,27 ,1)" }}
        id="playlist-container"
        className="relative transition-all duration-1000 bg-context"
        // style="min-height:300px;--context-color:rgba(24 ,24 ,27 ,1);"
      >
        <div className="relative z-10 px-6">
          <div className="grid gap-y-3 gap-x-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-6">
            {/* {playlists.map((playlist) => <PlaylistItemCard playlist={playlist} />)} */}
            {/* mapping */}
            {item.slice(0, 4).map((item, i) => {
              return (
                <>
                  {/* <a
                    href=""
                    className="playlist-item flex group relative transition-all p-2 duration-300 overflow-hidden items-center gap-5 rounded-md shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
                    data-color="transparent"
                  >
                    <div className="h-20 w-20">
                      <Image
                        src={coolImage}
                        alt="image"
                        className="object-cover h-full w-full rounded-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                      />
                    </div>
                    <div className="font-bold block">{item.des}</div>
                  </a> */}
                  <a
                    style={{ height: "263px" }}
                    key={i}
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:content transition duration-500 group relative mb-5 block w-full cursor-pointer transform transition-transform hover:scale-105 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  >
                    <Image
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{
                        maxWidth: "820px",
                        width: "100%",
                        height: "100%",
                        transform: "translate3d(0, 0, 0)",
                        objectFit: "cover",
                      }}
                      src={coolImage}
                      alt={item.des}
                    />
                    {/* <div
                      style={{
                        borderBottomRightRadius: "8px",
                        borderBottomLeftRadius: "8px",
                      }}
                      className="text-container absolute left-0 translate-y-[20%] right-0 bg-black bg-opacity-30 text-center p-4 opacity-0 transform transition-transform group-hover:opacity-100 group-hover:translate-y-[-100%] group-hover:transition group-hover:duration-500"
                    >
                      <p>{item.des}</p>
                    </div> */}
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div>
      </div>
    </>
  );
};

export default Index;
