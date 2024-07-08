import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { CollapsibleTableProps } from './CollapsibleTable.types.ts'
import { containerStyles } from './widgets/CollapsibleTable.styles.ts'
import Row from './widgets/Row/Row.tsx'
import { NestedRowType, BaseRowType } from './widgets/Row/Row.types.ts'

export default function CollapsibleTable<S extends BaseRowType, T extends NestedRowType<S>>({
  tableDefinition,
  tableData,
  secondaryTableTitle,
  onDelete,
}: CollapsibleTableProps<S, T>) {
  const { primaryColumns, secondaryColumns } = tableDefinition
  return (
    <TableContainer component={Paper} sx={containerStyles}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {primaryColumns.map((row) => (
              <TableCell sx={{ minWidth: 200 }} key={row.accessor as string}>
                <Typography variant="subtitle1">{row.label}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(({ secondary, ...primaryRow }) => (
            <Row<S, T>
              key={primaryRow.id as string | number}
              row={primaryRow as T}
              secondaryRows={secondary}
              primaryColumns={primaryColumns}
              secondaryColumns={secondaryColumns}
              onDelete={onDelete}
              secondaryTableTitle={secondaryTableTitle}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
