import React, { useState } from 'react';
import Listage from './ListeTdr';
import Affichage from './AffichageTdr';

function ClickAffiche() {
  const [tdrId, setTdrId] = useState(null);

  const handleTdrClick = (id) => {
    setTdrId(id);
  }

  return (
    <div>
      <Listage onTdrClick={handleTdrClick} />
      {tdrId && <Affichage tdrId={tdrId} />}
    </div>
  );
}

export default ClickAffiche;