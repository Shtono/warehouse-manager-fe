import {
  NestedWarehouse,
  WarehouseContainerType,
  WarehouseSecondaryRowType,
  WarehouseTableResponseType,
} from './WarehousesTable.types.ts'

const calculateCurrentLoad = (capacity: number, currentCapacity: number) =>
  (currentCapacity === 0 ? '0 %' : `${(capacity / currentCapacity).toFixed(2)} %`)

const extractWarehouseSecondaryData = (warehouseContainers: WarehouseContainerType[]) =>
  warehouseContainers
    .filter((container) => container.state === 'ACTIVE')
    .reduce(
      // @ts-ignore TODO: FIx this TS error
      (acc, curr) => {
        const { product } = curr
        const key = Number(product.id)
        const currentProduct = acc[key]

        if (currentProduct) {
          return {
            ...acc,
            [key]: {
              ...currentProduct,
              totalSizeInWarehouse: currentProduct.totalSizeInWarehouse + curr.size,
              totalQuantity: currentProduct.totalQuantity + curr.quantity,
            },
          }
        }

        return {
          ...acc,
          [key]: {
            id: Number(product.id),
            productName: product.name,
            hazardous: product.hazardous,
            price: product.price,
            description: product.description,
            totalSizeInWarehouse: curr.size,
            totalQuantity: curr.quantity,
          },
        }
      },
      {} as Record<number, WarehouseSecondaryRowType>,
    )

export const formatWarehousesTableData = (
  warehouses: WarehouseTableResponseType,
): NestedWarehouse[] =>
  warehouses.map(
    ({
      id,
      name,
      location,
      capacity,
      current_capacity,
      hazardous,
      created_at,
      updated_at,
      ...containers
    }) => ({
      id,
      name,
      location,
      capacity,
      current_capacity,
      hazardous,
      created_at,
      updated_at,
      current_load: calculateCurrentLoad(capacity, current_capacity),
      secondary: Object.values(
        extractWarehouseSecondaryData(
          containers.containers,
        ) as unknown as WarehouseSecondaryRowType[],
      ),
      //   .map((item) => ({
      //   ...item,
      //   warehouseCapacityTakenByTheProduct: `${(item.warehouseCapacity / item.productTotalSizeForWarehouse).toFixed(2)} %`,
      // })),
    }),
  )
