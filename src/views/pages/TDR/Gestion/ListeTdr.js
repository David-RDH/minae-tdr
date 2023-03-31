// import React, { useState, useEffect } from 'react';

// function ListeTdr() {
//   const [tdrs, setTdrs] = useState([]);

//   useEffect(() => {
//     db.all('SELECT * FROM tdr', [], (err, rows) => {
//       if (err) {
//         console.error(err.message);
//       }
//       setTdrs(rows);
//     });
//   }, []);

//   const handleClick = (id) => {
//     // Afficher les détails de la TDR avec l'ID donné
//   }

//   return (
//     <div>
//       {tdrs.map((tdr) => (
//         <div key={tdr.id} onClick={() => handleClick(tdr.id)}>
//           {tdr.id}: {tdr.contenu}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListeTdr;
