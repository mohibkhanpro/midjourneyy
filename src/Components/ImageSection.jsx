import React from "react";
import EventPhotos from "./EventPhotos";
import EventSide from "./EventSide";

const ImageSection = () => {
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 mt-6">
        <EventSide />
        <EventPhotos />
        <EventSide />
      </div>
    </>
  );
};

export default ImageSection;
