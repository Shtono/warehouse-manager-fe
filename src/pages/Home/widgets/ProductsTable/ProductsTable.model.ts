import { Product, ProductSecondaryRowType } from './ProductsTable.types'
import { TableColumnDefinition } from '../../../../types/general.ts'

export const productsTableDefinition = {
  primaryColumns: [
    { label: 'Product name', accessor: 'name' },
    { label: 'Description', accessor: 'description' },
    { label: 'Price', accessor: 'price' },
    { label: 'Size', accessor: 'size' },
    { label: 'Hazardous product', accessor: 'hazardous' },
    { label: 'Created at', accessor: 'created_at' },
    { label: 'Updated at', accessor: 'updated_at' },
  ] as TableColumnDefinition<Product>[],
  secondaryColumns: [
    { label: 'Warehouse ID', accessor: 'id' },
    { label: 'Warehouse', accessor: 'warehouseName' },
    { label: 'Product quantity', accessor: 'productQuantity' },
    { label: 'Total size in Warehouse', accessor: 'productTotalSizeForWarehouse' },
    { label: 'Warehouse capacity', accessor: 'warehouseCapacity' },
    { label: 'Capacity from product', accessor: 'warehouseCapacityTakenByTheProduct' },
  ] as TableColumnDefinition<ProductSecondaryRowType>[],
}
