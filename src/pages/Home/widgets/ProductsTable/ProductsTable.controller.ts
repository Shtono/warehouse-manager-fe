import {
  NestedProduct,
  ProductContainerType,
  ProductSecondaryRowType,
  ProductsResponseType,
} from './ProductsTable.types.ts'

const getPercentage = (total: number, value: number) => (100 / (total / value)).toFixed(2)

const extractProductSecondaryRowData = (containers: ProductContainerType[]) =>
  containers
    .filter((container) => container.state === 'ACTIVE')
    .reduce(
      (acc, curr) => {
        const { warehouse } = curr
        const key = Number(warehouse.id)
        const currentItem = acc[key]

        if (currentItem) {
          return {
            ...acc,
            [key]: {
              ...currentItem,
              productQuantity: currentItem.productQuantity + curr.quantity,
              productTotalSizeForWarehouse: currentItem.productTotalSizeForWarehouse + curr.size,
            },
          }
        }

        return {
          ...acc,
          [key]: {
            id: warehouse.id,
            warehouseName: warehouse.name,
            productQuantity: curr.quantity,
            productTotalSizeForWarehouse: curr.size,
            warehouseCapacity: warehouse.capacity,
            warehouseCapacityTakenByTheProduct: 0,
          },
        }
      },
      {} as Record<number, ProductSecondaryRowType>,
    )

export const formatProductsData = (products: ProductsResponseType): NestedProduct[] =>
  products.map(
    ({ id, name, description, price, size, hazardous, created_at, updated_at, ...containers }) => ({
      id,
      name,
      description,
      price,
      size,
      hazardous,
      created_at: created_at as string,
      updated_at: updated_at as string,
      secondary: Object.values(
        extractProductSecondaryRowData(containers.containers) as ProductSecondaryRowType[],
      ).map((item) => ({
        ...item,
        warehouseCapacityTakenByTheProduct: `${getPercentage(item.warehouseCapacity, item.productTotalSizeForWarehouse)} %`,
      })),
    }),
  )
