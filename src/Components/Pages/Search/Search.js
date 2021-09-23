import React, { useState } from "react";
import axios from "axios";

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

  const searchRequest = (title, category, ingredient_list, level, cooking_time) => {

    const config = {
      headers: {
          "content-type": "application/json",
          Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01',
      }
  }

      const params = new URLSearchParams(`title=${title}`)
      if (category){params.append('category', category.id)}
      if (ingredient_list.length > 0){params.append('ingredients', ingredient_list.join('_'))}
      if (level){params.append('level', level)}
      if (cooking_time){params.append('cooking_time', cooking_time)}
      
      setSpin(true)
      axios.get(`http://84.241.22.193:8000/api/member/search/?${params.toString()}`, config)
        .then((res) => {
          console.log(res)
          if (res.status === 200){
            setResults(res.data.map(result => ({
              id: result.id,
              name: result.title,
              picture: ghorme,
              hardness: result.level,
              rate: result.rating,
              time: `${result.cooking_time} دقیقه`
            })))
            setHasResult(true)
          }
        }).catch (err => console.error(err)).finally(() => { setSpin(false)})
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
