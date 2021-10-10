import React, { useState, useCallback, useEffect } from "react";

import { searchService } from "../../../services/member-search.service";
import { historyService } from "../../../services/member-history.service";

import classes from "./Search.module.css";

import HistoryPanel from "./HistoryPanel/HistoryPanel";
import ResultsPanel from "./ResultsPanel/ResultsPanel";
import SearchPanel from "./SearchPanel/SearchPanel";
import Spinner from "../../UI/Spinner/Spinner";
import ghorme from "../../../assets/search_page/ghorme.png";

/**
 * this component holds all parts that create the search page
 * @param {*} props
 * @returns None
 */
const Search = (props) => {
  // this state decides whether to show history or result panel
  const [hasResult, setHasResult] = useState(false);

  const [spin, setSpin] = useState(false);

  const [results, setResults] = useState([]);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!hasResult){
      fetchHistory()
    }
  }, [])

  // this method uses searchService and sends search request and then handles the response
  const searchRequest = (title, category, ingredient_list, level, range) => {
    setSpin(true);
    searchService
      .search({ title, category, ingredient_list, level, range })
      .then((res) => {
        setResults(
          res.data.map((result) => ({
            id: result.id,
            name: result.title,
            picture: ghorme,
            hardness: result.level,
            rate: result.rating,
            time: `${result.cooking_time} دقیقه`,
          }))
        );
        setHasResult(true);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setSpin(false);
      });
  };

  // This method fetches at least 5 last history records
  const fetchHistory = () => {
    setSpin(true);
    historyService
      .history(5)
      .then((res) => setHistory(res.data))
      .catch((err) => console.error(err))
      .finally(() => setSpin(false))
  };

  /**
   * removes a single history record
   * @param {*} id
   */
  const onRemoveHistory = useCallback((id) => {
    historyService
      .removeHistory(id)
      .then((res) => fetchHistory())
      .catch((err) => console.log(err));
  }, []);

  /**
   * clears the whole search history
   */
  const onClearHistory = useCallback(() => {
    historyService
      .clearHistory()
      .then((res) => fetchHistory())
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.Search}>
      <Spinner show={spin} centered />
      <SearchPanel onRequest={searchRequest} />
      {hasResult ? <ResultsPanel results={results} /> : <HistoryPanel history={history} onClear={onClearHistory} onRemove={onRemoveHistory}/>}
    </div>
  );
};

export default Search;
