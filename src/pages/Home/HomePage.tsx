import { Stack } from '@mui/material'

import AddProductModal from './widgets/AddProductModal/AddProductModal.tsx'
import ProductsTable from './widgets/ProductsTable/ProductsTable.tsx'

const HomePage = () => (
  <Stack p={3} gap={2}>
    <AddProductModal />
    <ProductsTable />
  </Stack>
)

export default HomePage
