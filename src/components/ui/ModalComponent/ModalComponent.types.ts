import { ReactNode } from 'react'

export type ModalComponentPropsType = {
  title: string
  triggerButtonName: string
  onSave: (handleCloseModal: () => void) => void
  children: ReactNode
  onClose?: () => void
  closeButtonName?: string
  saveButtonName?: string
  isSaveDisabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  // Default variant is contained
  variant?: 'contained' | 'outlined'
}
