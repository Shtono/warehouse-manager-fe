import { Stack, Typography, useMediaQuery } from '@mui/material'

const AppBarTitle = ({ title, version }: { title: string; version: string }) => {
  const isSmallScreen = useMediaQuery('(max-width:480px)')
  const isExtraSmallScreen = useMediaQuery('(max-width:390px)')

  const titleVariant = (() => {
    if (isExtraSmallScreen) return 'h6'
    if (isSmallScreen) return 'h5'
    return 'h4'
  })()

  return (
    <Typography
      variant={titleVariant}
      component={Stack}
      sx={{ flexGrow: 1, flexDirection: 'row', alignItems: 'flex-end', gap: 1, marginLeft: 5 }}
    >
      {title}
      <Typography variant="caption">{version}</Typography>
    </Typography>
  )
}
export default AppBarTitle
