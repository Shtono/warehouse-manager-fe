import { Stack, Switch } from '@mui/material'
import Typography from '@mui/material/Typography'

import { SwitchWithLabelProps } from './SwitchWithLabel.types.ts'

const SwitchWithLabel = ({ checked, toggleChecked }: SwitchWithLabelProps) => (
  <Stack direction="row" alignItems="center">
    <Typography variant="subtitle1">Hazardous</Typography>
    <Switch checked={checked} onClick={toggleChecked} color="warning" />
  </Stack>
)

export default SwitchWithLabel
