import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { DrawerListProps } from './DrawerList.types.ts'

const DrawerList = ({ closeDrawer, pages }: DrawerListProps) => (
  <Box sx={{ width: 250 }} role="presentation" onClick={closeDrawer}>
    <List>
      {pages.map(({ label, path, Icon }) => (
        <Link key={label} onClick={closeDrawer} to={path} style={{ color: 'inherit' }}>
          <ListItem key={label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
  </Box>
)

export default DrawerList
