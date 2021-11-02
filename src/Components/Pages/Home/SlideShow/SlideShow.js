import React from "react";
import classes from "./SlideShow.module.css";
import { Link } from "react-router-dom";

const colors = [
  "https://blog.okala.com/wp-content/uploads/2019/10/%DA%A9%D8%A8%D8%A7%D8%A8-%D8%A8%D9%86%D8%A7%D8%A8-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2%DB%8C.jpg",
  "https://ghazapaz.com/wp-content/uploads/2020/10/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%DB%8C%D9%85%D9%87-%D8%A8%D8%A7-%D8%B3%D9%88%DB%8C%D8%A7.jpg",
  "https://blog.okala.com/wp-content/uploads/2020/12/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D8%B4.jpg",
  "https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
];
const delay = 2500;

const SlideShow = (props) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className={classes.slide} key={index}>
            <img src={backgroundColor} className={classes.image} alt="categor" />
          </div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={
              index === idx ? classes.slideshowDotactive : classes.slideshowDot
            }
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <Link to="categories" className={classes.allbtn}>
        مشاهده همه
      </Link>
    </div>
  );
};
export default SlideShow;
