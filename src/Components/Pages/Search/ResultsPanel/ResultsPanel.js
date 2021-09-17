import React, { useState } from "react";

import classes from "./ResultsPanel.module.css";

import settings from '../../../../assets/search_page/settings.png';
import ghorme from '../../../../assets/search_page/ghorme.png';

import ResultItem from "./ResultItem/ResultItem";

/**
 * dummy results for a normal search
 */
const searchResults = [
  {
    id: 1,
    name: 'قرمه سبزی',
    picture: ghorme,
    hardness: 2,
    rate: 5,
    time: '45 دقیقه'
  },
  {
    id: 2,
    name: 'قرمه سبزی',
    picture: ghorme,
    hardness: 1,
    rate: 4,
    time: '30 دقیقه'
  },
  {
    id: 3,
    name: 'قرمه سبزی',
    picture: ghorme,
    hardness: 3,
    rate: 4,
    time: '60 دقیقه'
  },
]

/**
 * functional component that manages the whole search results and shows them
 * @param {*} props 
 * @returns 
 */
const ResultsPanel = (props) => {

  // this variable holds the results to a search request(for now)
  const [results, setResults] = useState(searchResults)

  return (
    <div className={classes.ResultsPanel}>
      <div className={classes.ResultsPanelTitle}>
        <h2>نتایج</h2>
        <img src={settings} alt="delete" />
      </div>
      <hr />
      <div className={classes.ResultsPanelList}>
        {
          results && results.length > 0 ?
          <ul>
              {results.map(result => <ResultItem key={result.id} item={result}/>)}
          </ul> :
          <p>no previous results</p>
        }
      </div>
    </div>
  );
};

export default ResultsPanel;
