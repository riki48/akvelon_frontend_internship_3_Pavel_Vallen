import {images} from './SliderData';
import {useState,useEffect} from 'react';
import '../ImageSlider.css'
function ImageSlider(){
    const [index,setIndex] = useState(2); 
    
    const slideRight = (e) =>{
        if(index===images.length-1)
            return;
       else setIndex(index+1);
    }
    const slideLeft = (e) =>{
        if(index===0)
            return;
        else setIndex(index-1);
    }
    return(
        <div className="slider-wrapper">
            <button onClick={slideLeft} className="btn-left">{"<"}</button>
            <img src={images[index]} className="image" />
            <button onClick={slideRight} className="btn-right">{'>'}</button>
        </div>
    )
}
export default ImageSlider;