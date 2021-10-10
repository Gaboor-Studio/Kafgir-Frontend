import React, { useState } from "react";

import classes from "./ResultsPanel.module.css";

import settings from '../../../../assets/search_page/settings.png';

import ResultItem from "./ResultItem/ResultItem";

/**
 * functional component that manages the whole search results and shows them
 * @param {*} props 
 * @returns 
 */
const ResultsPanel = (props) => {

  return (
    <div className={classes.ResultsPanel}>
      <div className={classes.ResultsPanelTitle}>
        <h2>نتایج</h2>
        <img src={settings} alt="delete" />
      </div>
      <hr />
      <div className={classes.ResultsPanelList}>
        {
          props.results && props.results.length > 0 ?
          <ul>
              {props.results.map(result => <ResultItem key={result.id} item={result}/>)}
          </ul> :
          <p>no results</p>
        }
      </div>
    </div>
  );
};

export default ResultsPanel;
