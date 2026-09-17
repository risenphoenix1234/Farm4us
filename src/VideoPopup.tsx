import React, { useEffect, useState } from "react";

const YOUTUBE_VIDEO_ID = "x42-9SCXsGw";
const AUTO_CLOSE_MS = 10000;

const VideoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen || isPlaying) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, AUTO_CLOSE_MS);

    return () => clearTimeout(timer);
  }, [isOpen, isPlaying]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "800px",
          aspectRatio: "16 / 9",
          backgroundColor: "#000",
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close video popup"
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
            title="Pitch Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            onClick={handlePlay}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 0, 0, 0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "14px solid transparent",
                  borderBottom: "14px solid transparent",
                  borderLeft: "22px solid #fff",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPopup;