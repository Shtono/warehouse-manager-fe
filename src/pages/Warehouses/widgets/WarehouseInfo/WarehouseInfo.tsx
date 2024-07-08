import { useQuery } from '@apollo/client'
import { Stack, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { SyntheticEvent, useMemo, useState } from 'react'

import { getTabProps } from './WarehouseInfo.controller.ts'
import TabView from './widgets/TabView/TabView.tsx'
import WarehouseDashboard from './widgets/WarehouseDashboard/WarehouseDashboard.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import { WarehouseInfoDocument } from '../../../../graphql/generated.ts'
import AddStockToWarehouseModal from '../AddStockToWarehouseModal/AddStockToWarehouseModal.tsx'
import RemoveStockFromWarehouseModal from '../RemoveStockFromWarehouseModal/RemoveStockFromWarehouseModal.tsx'

function WarehouseInfo() {
  const isSmallScreen = useMediaQuery('(max-width: 375px)')

  const [value, setValue] = useState(0)
  const { data, error, loading } = useQuery(WarehouseInfoDocument, {
    variables: { customerId: CUSTOMER_ID },
  })

  const sortedWarehousesById = (() => {
    if (!data || !data.warehouses || !data.warehouses.length) return []
    console.log(data.warehouses)
    return Array.from(data.warehouses).sort((a, b) => +a.id - +b.id)
  })()

  // TODO: Add some error and loading components
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  console.log('sorted', sortedWarehousesById)
  console.log('data?.warehouses', data)

  return (
    <Paper component={Box} sx={{ width: '100%', border: '3px solid', borderColor: 'primary.dark' }}>
      <Stack
        gap={3}
        sx={{
          color: 'primary.contrastText',
          borderBottom: 3,
          borderColor: 'primary.dark',
          backgroundColor: 'primary.900',
        }}
      >
        <Stack
          p={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap={'wrap'}
        >
          <Typography variant={'h4'}>Warehouse Info</Typography>
          <Stack direction={isSmallScreen ? 'column' : 'row'} gap={3}>
            <AddStockToWarehouseModal
              warehouseId={sortedWarehousesById[value]?.id as string}
              hazardous={sortedWarehousesById[value].hazardous as boolean}
            />
            <RemoveStockFromWarehouseModal warehouseId={sortedWarehousesById[value].id as string} />
          </Stack>
        </Stack>
        <Tabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange}>
          {sortedWarehousesById.map((warehouse, index) => (
            <Tab key={warehouse.id} label={warehouse.name} {...getTabProps(index)} />
          ))}
        </Tabs>
      </Stack>
      {sortedWarehousesById.map((warehouse, index) => (
        <TabView key={warehouse.id} value={value} index={index}>
          <WarehouseDashboard warehouse={warehouse} />
        </TabView>
      ))}
    </Paper>
  )
}

export default WarehouseInfo
