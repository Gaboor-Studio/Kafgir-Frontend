import React from "react";
import ResultsPanel from "./ResultsPanel/ResultsPanel";

import classes from "./Search.module.css";
import SearchPanel from "./SearchPanel/SearchPanel";

const Search = (props) => {
  return (
    <div className={classes.Search}>
      <SearchPanel />
      <ResultsPanel />
    </div>
  );
};

export default Search;
