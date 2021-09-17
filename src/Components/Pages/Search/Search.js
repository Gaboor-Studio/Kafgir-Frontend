import React, {useState} from "react";
import HistoryPanel from "./HistoryPanel/HistoryPanel";
import ResultsPanel from "./ResultsPanel/ResultsPanel";

import classes from "./Search.module.css";
import SearchPanel from "./SearchPanel/SearchPanel";

const Search = (props) => {
  const [hasResult, setHasResult] = useState(false)

  return (
    <div className={classes.Search}>
      <SearchPanel />
      {hasResult ? <ResultsPanel /> : <HistoryPanel />}
    </div>
  );
};

export default Search;
