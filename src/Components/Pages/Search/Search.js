import React, {useState} from "react";
import HistoryPanel from "./HistoryPanel/HistoryPanel";
import ResultsPanel from "./ResultsPanel/ResultsPanel";

import classes from "./Search.module.css";
import SearchPanel from "./SearchPanel/SearchPanel";

/**
 * this component holds all parts that create the search page
 * @param {*} props 
 * @returns None
 */
const Search = (props) => {
  // this state decides whether to show history or result panel
  const [hasResult, setHasResult] = useState(false)

  return (
    <div className={classes.Search}>
      <SearchPanel />
      {hasResult ? <ResultsPanel /> : <HistoryPanel />}
    </div>
  );
};

export default Search;
