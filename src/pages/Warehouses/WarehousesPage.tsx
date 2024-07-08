import { Stack } from '@mui/material'

import AddWarehouseModal from './widgets/AddWarehouseModal/AddWarehouseModal.tsx'
import WarehouseInfo from './widgets/WarehouseInfo/WarehouseInfo.tsx'
import WarehousesTable from './widgets/WarehousesTable/WarehousesTable.tsx'

const WarehousesPage = () => (
  <Stack p={3} gap={4}>
    <AddWarehouseModal />
    <WarehousesTable />
    <WarehouseInfo />
  </Stack>
)

export default WarehousesPage
