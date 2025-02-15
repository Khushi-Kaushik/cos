"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/message/arrow.svg";
import plus from "../../assets/message/plus.svg";
import camera from "../../assets/message/camera.svg";

export const Input = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const openGallery = () => {
    fileInputRef.current?.click();
  };

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);

      const videoElement = document.createElement("video");
      videoElement.srcObject = mediaStream;
      videoElement.autoplay = true;
      videoElement.style.position = "absolute";
      videoElement.style.top = "50%";
      videoElement.style.left = "50%";
      videoElement.style.transform = "translate(-50%, -50%)";
      videoElement.style.zIndex = "1000";
      videoElement.style.width = "90%";
      videoElement.style.maxWidth = "600px";
      videoElement.style.borderRadius = "8px";
      document.body.appendChild(videoElement);

      const closeButton = document.createElement("button");
      closeButton.textContent = "Close Camera";
      closeButton.style.position = "absolute";
      closeButton.style.top = "10%";
      closeButton.style.left = "50%";
      closeButton.style.transform = "translate(-50%, -50%)";
      closeButton.style.padding = "10px 20px";
      closeButton.style.borderRadius = "5px";
      closeButton.style.border = "none";
      closeButton.style.backgroundColor = "#ff4d4d";
      closeButton.style.color = "#fff";
      closeButton.style.cursor = "pointer";
      closeButton.style.zIndex = "1001";

      closeButton.addEventListener("click", () => {
        mediaStream.getTracks().forEach((track) => track.stop());
        setStream(null);

        document.body.removeChild(videoElement);
        document.body.removeChild(closeButton);
      });

      document.body.appendChild(closeButton);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected file:", files[0].name);
    }
  };

  return (
    <div className="flex w-full">
      <Image
        src={plus}
        alt="plus"
        className="w-[22px] h-[25px] ml-4 mt-5 cursor-pointer"
        onClick={openGallery}
      />

      <Image
        src={camera}
        alt="camera"
        className="w-[32px] h-[32px] mt-4 ml-4 cursor-pointer"
        onClick={openCamera}
      />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div className="p-4 flex items-center w-full relative">
        <input
          type="text"
          placeholder="Write your message here"
          className="w-full p-2 pl-4 bg-[#F4F4F4] rounded-md text-sm"
        />
        <Image
          src={arrow}
          alt="arrow"
          className="w-[23.5px] h-[12.5px] ml-2 text-gray-500 absolute top-1/2 right-4 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
};
