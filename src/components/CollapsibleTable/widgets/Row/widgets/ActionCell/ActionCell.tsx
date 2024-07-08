import { Check, Close, Delete } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import { useState } from 'react'

import { tableCellStyles, iconButtonStyles, iconStyle } from './ActionCell.styles'
import { ActionCellPropsTypes } from './ActionCell.types'

const ActionCell = ({ shouldRender, open, setOpen, onDelete }: ActionCellPropsTypes) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteCancel = () => setIsDeleting(false)

  const handleDeleteItem = () => {
    onDelete?.()
    setIsDeleting(false)
  }

  return (
    <TableCell sx={tableCellStyles}>
      <Stack direction="row" justifyContent="space-between" maxWidth={100}>
        {!isDeleting ? (
          <>
            {onDelete && (
              <IconButton sx={iconButtonStyles} size="small" onClick={() => setIsDeleting(true)}>
                <Delete sx={iconStyle} />
              </IconButton>
            )}
            {shouldRender && (
              <IconButton sx={iconButtonStyles} size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            )}
          </>
        ) : (
          <>
            <IconButton sx={iconButtonStyles} size={'small'} onClick={handleDeleteCancel}>
              <Close />
            </IconButton>
            <IconButton sx={iconButtonStyles} size={'small'} onClick={handleDeleteItem}>
              <Check />
            </IconButton>
          </>
        )}
      </Stack>
    </TableCell>
  )
}

export default ActionCell
