import React, { useState,useEffect } from 'react';

import axios from 'axios';


function Search() {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const baseURL ='https://creativecommons.tankerkoenig.de/json/list.php?lat=52.521&lng=13.438&rad=1.5&sort=dist&type=all&apikey=d49be2df-73f2-fc40-3974-8bb066bf546b'


const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    value.length > 2 && setQuery(value);
    axios
      .get(baseURL)
      .then((response) => {
        setResults(response.data.records);
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
      });
  };

  console.log(query);
  return (
    <><div className="search">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="rechercher"
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Search;