import React, { useState,useEffect } from 'react';

import axios from 'axios';


function Search() {
    const apikey= import.meta.env.VITE_API_KEY;
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const baseURL ='https://creativecommons.tankerkoenig.de/json/list.php?lat=52.521&lng=13.438&rad=1.5&sort=dist&type=all&apikey=apiKey'


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

  console.log(results);
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