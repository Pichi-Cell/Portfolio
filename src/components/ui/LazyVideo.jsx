import React from "react";

const LazyVideo = ({ src, className = "", autoPlay = false, ...props }) => {
  const videoRef = React.useRef(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || !autoPlay) return;

    video.load();
    video.play().catch(() => {
      // Autoplay can still be blocked by browser/user settings.
    });
  }, [autoPlay, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={className}
      preload={shouldLoad ? "metadata" : "none"}
      autoPlay={autoPlay}
      {...props}
    />
  );
};

export default LazyVideo;
