import React from "react";
import { images } from "./SliderData";
import { useState, useRef,useEffect } from "react";
import "../ImageSlider.css";

function ImageSlider() {
  const [index, setIndex] = useState(2);
  const rBtn = useRef(null);
  const lBtn = useRef(null);
  useEffect(()=>{
    
  },[index])
  const slideRight = (e) => {
    rightDisableCheck();
    setIndex(index + 1);
  };

  const slideLeft = (e) => {
    leftDisableCheck();
    setIndex(index - 1);
  };

  const rightDisableCheck = () => {
   
    if (index + 1 >= images.length - 1) rBtn.current.setAttribute("disabled", true);
    lBtn.current.removeAttribute("disabled");
  };

  const leftDisableCheck = () => {
    if (index - 1 === 0) lBtn.current.setAttribute("disabled", true);
    rBtn.current.removeAttribute("disabled");
  };

  return (
    <div className="slider-wrapper">
      <button onClick={slideLeft} className="btn-left" ref = {lBtn}></button>
      {images.map((image, i) => {
        return (
          <div key={i} className={index === i ? "slider active" : "slider"}>
            {index === i && <img src={image} className="image" />}
          </div>
        );
      })}
      <button onClick={slideRight} className="btn-right" ref = {rBtn}></button>
    </div>
  );
}
export default ImageSlider;
