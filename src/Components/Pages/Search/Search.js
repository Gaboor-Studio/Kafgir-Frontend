import React, { useState } from "react";

import {searchService} from '../../../services/member-search.service'

import classes from "./Search.module.css";

import HistoryPanel from "./HistoryPanel/HistoryPanel";
import ResultsPanel from "./ResultsPanel/ResultsPanel";
import SearchPanel from "./SearchPanel/SearchPanel";
import Spinner from "../../UI/Spinner/Spinner";
import ghorme from '../../../assets/search_page/ghorme.png';

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

  // this method uses searchService and sends search request and then handles the response
  const searchRequest = (title, category, ingredient_list, level, range) => {

    setSpin(true)
    searchService.search({title, category, ingredient_list, level, range})
      .then(res => {
        setResults(res.data.map(result => ({
          id: result.id,
          name: result.title,
          picture: ghorme,
          hardness: result.level,
          rate: result.rating,
          time: `${result.cooking_time} دقیقه`
        })))
        setHasResult(true)})
      .catch (err => console.error(err))
      .finally(() => { setSpin(false)})
  }

  return (
    <div className={classes.Search}>
      <Spinner show={spin} centered/>
      <SearchPanel onRequest={searchRequest}/>
      {hasResult ? <ResultsPanel results={results}/> : <HistoryPanel />}
    </div>
  );
};

export default Search;
