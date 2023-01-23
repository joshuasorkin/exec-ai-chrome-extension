/*
import React, {useState} from 'react';
import { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
*/


import React, { useState, useEffect } from 'react';
import './styles.css';


function Popup() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch(`https://d138-2601-645-8400-6240-9455-cdcc-eb32-6971.ngrok.io/prospects`);
      console.log("Response: ",response);
      const data = await response.json();
      let id = 0;
      data.forEach(function(result) {
        result.id = id++;
      });
      console.log('Results: ',data);
      setResults(data);
    }

    if (searchTerm) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <ResultsList results={results} />
    </div>
  );
}

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

function Result({ result, selectedId, setSelectedId }) {
  return (
    <li className={(selectedId === result.id || !selectedId) ? "selected" : "not-selected"}>
      <span
        onClick={() => setSelectedId(result.id)}
        style={{ cursor: "pointer" }}
      >
        <b>{result.fullName}</b>
      </span>
      {selectedId === result.id && (
        <div>
          <br />
          <span>{result.talking_point}</span>
        </div>
      )}
    </li>
  );
}


function ResultsList({ results }) {
  const [selectedId, setSelectedId] = useState(null);
  console.log("inside ResultsList: ",results);
  return (
    <ul>
      {results.map(result => (
        <Result
          key={result.id}
          result={result}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>
  );
}




export default Popup;
