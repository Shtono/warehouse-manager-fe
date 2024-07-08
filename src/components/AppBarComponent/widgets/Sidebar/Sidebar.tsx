import { Menu as MenuIcon } from '@mui/icons-material'
import { IconButton, Box, Drawer } from '@mui/material'
import * as React from 'react'

import { pages } from './Sidebar.model'
import DrawerList from './widgets/DrawerList/DrawerList.tsx'

function Sidebar() {
  const [open, setOpen] = React.useState(false)

  return (
    <Box>
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerList closeDrawer={() => setOpen(false)} pages={pages} />
      </Drawer>
    </Box>
  )
}

export default Sidebar
