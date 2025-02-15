import React, { useState, useRef } from "react";

interface ImageZoomProps {
  imageSrc: string;
  zoomLevel?: number; // Optional prop to control zoom level
}

const ImageZoom: React.FC<ImageZoomProps> = ({ imageSrc, zoomLevel = 2 }) => {
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const xPercent = ((event.clientX - left) / width) * 100;
    const yPercent = ((event.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: `${zoomLevel * 100}%`, // Dynamic zoom level
      display: "block",
    });
  };

  const handleMouseOut = () => {
    setZoomStyle(null);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%", // Adaptable container width
        maxWidth: "100%", // Optional max-width for responsiveness
        height: "500px", // Set container height
        cursor: "zoom-in",
       gap: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      {/* Main image */}
      <img
        src={imageSrc}
        alt="Zoomable"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />

      {/* Zoomed-in overlay */}
      {zoomStyle && (
        <div
          style={{
            ...zoomStyle,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${imageSrc})`,
            pointerEvents: "none", // Disable mouse events on the zoom overlay
            borderRadius: "inherit",
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
