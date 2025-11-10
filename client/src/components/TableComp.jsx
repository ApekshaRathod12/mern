import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/**
 * @typedef {Object} Column
 * @property {string} id - Unique identifier for the column
 * @property {string} label - Display label for the column header
 * @property {string} [align='left'] - Text alignment (left, right, center)
 * @property {function} [format] - Optional formatter function for cell values
 */

/**
 * Reusable table component that accepts columns and rows configuration
 * @param {Object} props
 * @param {Column[]} props.columns - Array of column configurations
 * @param {Object[]} props.rows - Array of data objects
 * @param {string} [props.minWidth='650px'] - Minimum width of the table
 * @param {string} [props.maxHeight] - Maximum height of the container (enables scroll)
 * @param {function} [props.onRowClick] - Optional click handler for rows
 */
const TableComp = ({
  columns,
  rows,
  style,
  minWidth = 200,
  maxHeight,
  onRowClick,
}) => {
  console.log("row", rows);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: maxHeight }}
      style={style}
    >
      <Table
        sx={{ minWidth: minWidth }}
        aria-label="data table"
        stickyHeader={!!maxHeight}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || "left"}
                sx={column.headerStyle}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row._id || index}
              hover={!!onRowClick}
              onClick={() => onRowClick?.(row)}
              sx={{
                cursor: onRowClick ? "pointer" : "default",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || "left"}>
                  {column.format
                    ? column.format(row[column.id])
                    : row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
