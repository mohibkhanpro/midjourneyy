import React from "react";
import { imageData } from "../lib/imagedata.ts";
import Image from "next/image";
import favimImage from "../assets/holl.jpg";
const EventPhotos = () => {
  return (
    <>
      {imageData.map((image, i) => (
        <a
          key={i}
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          // className="after:content transition duration-300 group relative mb-5 block w-full cursor-zoom-in transform transition-transform hover:scale-105 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          className="after:content transition duration-500 group relative mb-5 block w-full cursor-pointer transform transition-transform hover:scale-105 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <Image
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            // className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{
              maxWidth: "820px",
              width: "100%",
              height: "167px",
              transform: "translate3d(0, 0, 0)",
            }}
            src={favimImage}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <div
            style={{
              borderBottomRightRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
            className="text-container absolute left-0 translate-y-[20%] right-0 bg-black bg-opacity-30 text-center p-4 opacity-0 transform transition-transform group-hover:opacity-100 group-hover:translate-y-[-100%] group-hover:transition group-hover:duration-500"
          >
            <p>{image.des}</p>
          </div>
        </a>
      ))}
    </>
  );
};

export default EventPhotos;
