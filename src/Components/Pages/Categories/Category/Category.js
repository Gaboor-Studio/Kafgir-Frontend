import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import classes from "./Category.module.css";

const Category = (props) => {
  let { url } = useRouteMatch();

  //   console.log(path);
  //   console.log(url);

  return (
    <div className={classes.Category}>
      <Link to={`${url}/${props.id}`}>
        <img src={props.url} alt={props.title} />
        <p>{props.title}</p>
      </Link>
    </div>
  );
};

export default Category;
