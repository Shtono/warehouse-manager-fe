import { NestedRowType } from '../../../../components/CollapsibleTable/widgets/Row/Row.types.ts'
import { Warehouse as GeneratedWarehouse } from '../../../../graphql/generated.ts'
import { ContainerState } from '../../../../types/general.ts'

export interface WarehouseRow {
  id: string
  name: string
  location: string
  capacity: number
  current_capacity: number
  current_load: string
  hazardous: boolean
  created_at: string
  updated_at: string
}

export interface WarehouseSecondaryRowType {
  id: string // Product id
  productName: string
  hazardous: boolean
  price: number
  description: string
  totalSizeInWarehouse: number
  totalQuantity: number
}

export interface NestedWarehouse extends WarehouseRow, NestedRowType<WarehouseSecondaryRowType> {}

export type WarehouseContainerType = {
  id: string
  size: number
  quantity: number
  state: ContainerState
  product: {
    id: number
    hazardous: boolean
    name: string
    price: number
    description: string
  }
}

export type WarehouseTableResponseType = (Omit<
  GeneratedWarehouse,
  '__typename' | 'containers' | 'movement_logs' | 'customer' | 'customer_id'
  // '__typename' | 'containers' | 'customer' | 'customer_id' | 'movement_logs'
> & { containers: WarehouseContainerType[] })[]
