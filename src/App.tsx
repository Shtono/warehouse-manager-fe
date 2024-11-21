import { Stack } from '@mui/material'

import { Outlet } from 'react-router-dom'

import AppBarComponent from './components/AppBarComponent/AppBarComponent.tsx'

function App() {
  console.log('App component rendered')
  return (
    <Stack width="100VW" height="100VH" gap={3}>
      <AppBarComponent />
      <Outlet />
    </Stack>
  )
}

export default App
