import React, { useState, useEffect } from 'react';
import db from '../../../../database/tdr.sqlite';

function ListeTdr() {
  const [tdrNames, setTdrNames] = useState([]);

  useEffect(() => {
    const query = db.prepare('SELECT id, name, content FROM files WHERE Tdr IS NOT NULL');
    const results = query.all();
    setTdrNames(results);
  }, []);

  const handleClick = (tdrId) => {
    // Afficher les détails de la TDR avec l'ID correspondant
    const query = db.prepare('SELECT id, name, content FROM files WHERE id = ?');
    const result = query.get(tdrId);
    console.log(result);
    
  };

  return (
    <div>
      <h2>TDR Noms</h2>
      {tdrNames.map((tdrName) => (
        <div key={tdrName.id} onClick={() => handleClick(tdrName.id)}>
          <h3>{tdrName.name}</h3>
          <p>{tdrName.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ListeTdr;