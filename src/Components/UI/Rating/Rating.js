import React from "react"
import classes from "./Rating.module.css";
import rating from "..//..//..//assets/rating.svg";
import fillrating from "..//..//..//assets/fillrating.svg";
import halfrating from "..//..//..//assets/halfrating.svg";

const Rating = (props) => {
  const rate = props.rate;
  let stars = [rating, rating, rating, rating, rating];
  let i =0.5;
  while (rate>=i){
    if(parseInt(i)===i){
      stars[i-1]=fillrating;
    }else{
      stars[parseInt(i)] = halfrating;
    }
    i=i+0.5;
  }
  return (
    <div>
      <img src={stars[0]} width={props.size} alt="star" />
      <img src={stars[1]} width={props.size} alt="star" />
      <img src={stars[2]} width={props.size} alt="star" />
      <img src={stars[3]} width={props.size} alt="star" />
      <img src={stars[4]} width={props.size} alt="star" />
    </div>
  );
};

export default Rating;
