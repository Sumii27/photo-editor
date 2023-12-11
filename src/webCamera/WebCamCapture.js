import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { addImage } from "../features/webCamSlice";
import { useNavigate } from "react-router-dom";
const WebCamCapture = () => {
  const videoConstraints = {
    width: 400,
    height: 500,
    facingMode: "user",
  };
  const imageRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageCapture = () => {
    const image = imageRef.current.getScreenshot();
    dispatch(addImage(image));
    navigate("/priview");
  };
  return (
    <div>
      <Webcam
        audio={false}
        height={500}
        width={400}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
        ref={imageRef}
      />
      <button type="button" className="btn btn-primary" onClick={imageCapture}>
        Click Me
        {/* <i className="bi bi-record-circle-fill"></i> */}
      </button>
    </div>
  );
};

export default WebCamCapture;
