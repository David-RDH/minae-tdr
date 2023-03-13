import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import OutlinedInput from "@mui/material/OutlinedInput";

const BudgetTable = (show) => {
  return (
    <div>
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
            <TableCell>Indemnite des agents centrals</TableCell>
            <TableCell>Personne</TableCell>
            <TableCell>3</TableCell>
            <TableCell>130.000</TableCell>
            <TableCell>21</TableCell>
            <TableCell>8.190.000</TableCell>
            <TableCell>Test</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BudgetTable;
