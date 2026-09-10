import React from "react";

const LazyVideo = ({ src, className = "", autoPlay = false, ...props }) => {
  return (
    <video
      data-lazy-video
      data-src={src}
      className={className}
      preload="none"
      autoPlay={autoPlay}
      {...props}
    />
  );
};

export default LazyVideo;
