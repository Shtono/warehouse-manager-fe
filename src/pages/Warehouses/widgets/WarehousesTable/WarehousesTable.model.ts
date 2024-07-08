import { WarehouseRow, WarehouseSecondaryRowType } from './WarehousesTable.types.ts'
import { TableColumnDefinition } from '../../../../types/general.ts'

export const warehousesTableDefinition = {
  primaryColumns: [
    { accessor: 'id', label: 'Warehouse ID' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'location', label: 'Location' },
    { accessor: 'hazardous', label: 'Is hazardous' },
    { accessor: 'capacity', label: 'Capacity' },
    { accessor: 'current_capacity', label: 'Current capacity' },
    { accessor: 'current_load', label: '% Current load' },
    { accessor: 'created_at', label: 'Created at' },
    { accessor: 'updated_at', label: 'Updated at' },
  ] as TableColumnDefinition<WarehouseRow>[],
  secondaryColumns: [
    { accessor: 'id', label: 'Product ID' },
    { accessor: 'productName', label: 'Product name' },
    { accessor: 'hazardous', label: 'Is hazardous' },
    { accessor: 'price', label: '$ Product price' },
    { accessor: 'description', label: 'Description' },
    { accessor: 'totalSizeInWarehouse', label: 'Total size in warehouse' },
    { accessor: 'totalQuantity', label: 'Total quantity in Warehouse' },
  ] as TableColumnDefinition<WarehouseSecondaryRowType>[],
}
