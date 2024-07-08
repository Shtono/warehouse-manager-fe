import { useQuery, useMutation } from '@apollo/client'

import { formatWarehousesTableData } from './WarehousesTable.controller.ts'
import { warehousesTableDefinition } from './WarehousesTable.model.ts'
import {
  NestedWarehouse,
  WarehouseSecondaryRowType,
  WarehouseTableResponseType,
} from './WarehousesTable.types.ts'
import CollapsibleTable from '../../../../components/CollapsibleTable/CollapsibleTable.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import {
  WarehousesTableDataDocument,
  DeleteWarehouseDocument,
} from '../../../../graphql/generated.ts'

const WarehousesTable = () => {
  const { data, loading, error } = useQuery(WarehousesTableDataDocument, {
    variables: { customerId: Number(CUSTOMER_ID) },
  })
  const [deleteWarehouse, { error: deleteWarehouseError }] = useMutation(DeleteWarehouseDocument, {
    refetchQueries: [
      { query: WarehousesTableDataDocument, variables: { customerId: Number(CUSTOMER_ID) } },
    ],
  })

  const isError = error || deleteWarehouseError

  // TODO: Add a loading component and some error handling
  if (loading || !data) return <div>Loading</div>
  if (isError) return <div>Error</div>

  const handleDelete = async (id: string) => {
    await deleteWarehouse({
      variables: {
        deleteWarehouseId: Number(id),
      },
    })
  }

  return (
    <CollapsibleTable<WarehouseSecondaryRowType, NestedWarehouse>
      tableDefinition={warehousesTableDefinition}
      tableData={formatWarehousesTableData(
        data.warehouses as unknown as WarehouseTableResponseType,
      )}
      secondaryTableTitle="Product in warehouses"
      onDelete={handleDelete}
    />
  )
}

export default WarehousesTable
