import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useState, Fragment } from 'react'

import { BaseRowType, NestedRowType, RowPropsType } from './Row.types'
import ActionCell from './widgets/ActionCell/ActionCell'

function Row<S extends BaseRowType, T extends NestedRowType<S>>({
  row,
  secondaryRows,
  primaryColumns,
  secondaryColumns,
  onDelete,
  secondaryTableTitle,
}: RowPropsType<S, T>) {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow>
        <ActionCell
          shouldRender={!!secondaryRows.length}
          open={open}
          setOpen={setOpen}
          onDelete={onDelete ? () => onDelete(row.id as string) : undefined}
        />
        {primaryColumns.map((item) => (
          <TableCell key={item.accessor as string} align="left">
            {row[item.accessor] !== undefined ? row[item.accessor].toString() : ''}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        {secondaryRows.length ? (
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout={500} unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {secondaryTableTitle}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {secondaryColumns.map((col) => (
                        <TableCell key={col.accessor as string}>
                          <Typography variant="subtitle1">{col.label}</Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {secondaryRows.map((historyRow) => (
                      <TableRow key={historyRow.id as string | number}>
                        {secondaryColumns.map((column) => (
                          <TableCell key={column.accessor as string}>
                            <Typography variant="caption">
                              {historyRow[column.accessor] !== undefined
                                ? historyRow[column.accessor]?.toString()
                                : ''}
                            </Typography>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        ) : null}
      </TableRow>
    </Fragment>
  )
}

export default Row
