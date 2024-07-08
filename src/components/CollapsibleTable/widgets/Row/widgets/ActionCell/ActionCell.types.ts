export type ActionCellPropsTypes = {
  shouldRender: boolean
  open: boolean
  setOpen: (open: boolean) => void
  onDelete?: () => void
}
