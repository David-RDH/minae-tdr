import React, { useState, useEffect } from 'react';
import db from './tdr.sqlite';

function AffichageTdr({ tdrId }) {
  const [tdr, setTdr] = useState(null);

  useEffect(() => {
    db.get('SELECT * FROM tdr WHERE id = ?', [tdrId], (err, row) => {
      if (err) {
        console.error(err.message);
      }
      setTdr(row);
    });
  }, [tdrId]);

  if (!tdr) {
    return null;
  }

  return (
    <div>
      <h2>TDR {tdr.id}</h2>
      <p>{tdr.contenu}</p>
    </div>
  );
}

export default AffichageTdr;