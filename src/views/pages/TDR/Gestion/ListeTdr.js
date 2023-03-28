import React, { useState, useEffect } from 'react';
import sqlite3 from 'sqlite3';

function ListeTdr() {
  const [tdrNames, setTdrNames] = useState([]);

  useEffect(() => {
    const db = sqlite3('tdr.sqlite');
    const query = db.prepare('SELECT name FROM files WHERE tdr_result IS NOT NULL');
    const results = query.all();
    setTdrNames(results);
  }, []);

  return (
    <div>
      <h2>TDR Noms</h2>
      <ul>
        {tdrNames.map((tdrName, index) => (
          <li key={index}>
            {tdrName.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTdr;