import { Button, Modal, Stack, useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import { containerStyles } from './ModalComponent.styles.ts'

import { ModalComponentPropsType } from './ModalComponent.types'

const ModalComponent = ({
  title,
  triggerButtonName,
  onSave,
  onClose,
  closeButtonName,
  saveButtonName,
  children,
  isSaveDisabled,
  startIcon,
  endIcon,
  variant,
}: ModalComponentPropsType) => {
  const [open, setOpen] = useState(false)
  const isSmallScreen = useMediaQuery('(max-width:620px)')
  const isExtraSmallScreen = useMediaQuery('(max-width:475px)')

  const containerWidth = (() => {
    if (isExtraSmallScreen) return 360
    if (isSmallScreen) return 450
    return 600
  })()

  const handleClose = () => {
    onClose?.()
    setOpen(false)
  }

  const handleSave = () => {
    onSave(() => setOpen(false))
  }

  return (
    <Stack direction="row">
      <Button
        variant={variant ?? 'contained'}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={() => setOpen(true)}
      >
        {triggerButtonName}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Stack sx={containerStyles(containerWidth)}>
          <Typography variant="h4">{title}</Typography>
          {children}
          <Stack direction="row" justifyContent="end" gap={3}>
            <Button variant="outlined" onClick={handleClose}>
              {closeButtonName ?? 'Cancel'}
            </Button>
            <Button disabled={isSaveDisabled ?? false} variant="contained" onClick={handleSave}>
              {saveButtonName ?? 'Save'}
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  )
}

export default ModalComponent
