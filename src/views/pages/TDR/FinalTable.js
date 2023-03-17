import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box,
    TextField
  } from "@mui/material";

const FinalTable = ({ isOpen, allRows }) => {
    const totaux = () => {
        let value = 0
        allRows.forEach(r => {
          value = + value + r.total
        })
    
        return value.toLocaleString().replaceAll(',', ' ')
      }
      
    return (
        <div>
            {
                isOpen && (
                    <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Designation</TableCell>
                <TableCell align="right">Unites</TableCell>
                <TableCell align="right">Quantite</TableCell>
                <TableCell align="right">Prix Unitaire(Ar)</TableCell>
                <TableCell align="right">Nombre de jour</TableCell>
                <TableCell align="right">Cout total(Ar)</TableCell>
                <TableCell align="right">Observations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allRows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.unite}</TableCell>
                  <TableCell>{row.quantite}</TableCell>
                  <TableCell align="right">{row.pu.toLocaleString().replaceAll(',', ' ')}</TableCell>
                  <TableCell>{row.nb_jour}</TableCell>
                  <TableCell align="right">{row.total.toLocaleString().replaceAll(',', ' ')}</TableCell>
                  <TableCell>{row.obs}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5}>Somme total</TableCell>
                <TableCell align="right">{totaux()}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
                )
            }
        </div>

    )
}

export default FinalTable;