import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, removeImage } from "../features/webCamSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

const ImagePriview = () => {
  const { imageValue } = useSelector(selectImage);
  const canvasRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDraw, setIsDraw] = useState(false);

  const backToCam = () => {
    dispatch(removeImage());
    navigate("/");
  };

  const drawOnImg = (e) => {
    setIsDraw(isDraw);
    if (isDraw) {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  };

  return (
    <>
      <div ref={canvasRef}>
        <div>ImagePriview</div>
        <img src={imageValue} alt="" height="200" width="300"></img>
        <canvas id="myCanvas" height="200" width="300"></canvas>
        <button onClick={backToCam}>Back To Cam</button>
        <button onMouseMove={drawOnImg}>Draw</button>
      </div>
    </>
  );
};

export default ImagePriview;
