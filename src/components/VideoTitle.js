import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-300 text-white p-4 px-12 text-xl rounded-lg">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-300 text-white p-4 px-12 text-xl rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
