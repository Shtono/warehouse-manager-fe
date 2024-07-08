import { Box, Toolbar, AppBar, Theme } from '@mui/material'

import AppBarTitle from './widgets/AppBarTitle/AppBarTitle.tsx'
import Sidebar from './widgets/Sidebar/Sidebar.tsx'
import UserMenu from './widgets/UserMenu/UserMenu.tsx'

const AppBarComponent = () => {
  // const [auth, setAuth] = useState(true)
  const auth = true
  return (
    <Box sx={{ border: (theme: Theme) => `${theme.palette.primary.dark} solid 1px` }}>
      <AppBar position="static">
        <Toolbar>
          <Sidebar />
          <AppBarTitle title="Warehouse Manager" version="V1.0" />
          {auth && <UserMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBarComponent
