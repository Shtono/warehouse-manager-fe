import { NestedRowType } from '../../../../components/CollapsibleTable/widgets/Row/Row.types.ts'
import { Product as GeneratedProduct } from '../../../../graphql/generated.ts'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  size: number
  hazardous: boolean
  created_at: string
  updated_at: string
}

export type ProductSecondaryRowType = {
  id: string
  warehouseName: string
  productQuantity: number
  productTotalSizeForWarehouse: number // product size * product quantity, how much capacity does the procuct take in the warehouse
  warehouseCapacity: number // Max capacity of the warehouse
  warehouseCapacityTakenByTheProduct: number | string // warehouse.capacity / product size
}

export interface NestedProduct extends NestedRowType<ProductSecondaryRowType>, Product {}

// export interface NestedProduct extends NestedRowType<ProductSecondaryRowType> {
//   id: string
//   name: string
//   description: string
//   price: number
//   size: number
//   hazardous: boolean
//   created_at: string
//   updated_at: string
//   secondary: ProductSecondaryRowType[]
// }

export type ProductContainerType = {
  quantity: number
  size: number
  state: 'ACTIVE' | 'ARCHIVED'
  warehouse: {
    id: string
    name: string
    current_capacity: number
    capacity: number
  }
}

export type ProductsResponseType = (Omit<
  GeneratedProduct,
  'containers' | 'customer' | 'customer_id'
> & {
  containers: ProductContainerType[]
})[]
