import { useMutation, useQuery } from '@apollo/client'

import { useSnackbar } from 'notistack'

import { formatProductsData } from './ProductsTable.controller.ts'
import { productsTableDefinition } from './ProductsTable.model.ts'
import {
  NestedProduct,
  ProductSecondaryRowType,
  ProductsResponseType,
} from './ProductsTable.types.ts'
import CollapsibleTable from '../../../../components/CollapsibleTable/CollapsibleTable.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import { DeleteProductDocument, ProductsTableQueryDocument } from '../../../../graphql/generated.ts'

const ProductsTable = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { data, loading, error } = useQuery(ProductsTableQueryDocument, {
    variables: { customerId: CUSTOMER_ID },
  })
  const [deleteProduct] = useMutation(DeleteProductDocument, {
    refetchQueries: [{ query: ProductsTableQueryDocument, variables: { customerId: CUSTOMER_ID } }],
  })

  if (loading || !data) return <div>Loading</div>
  if (error) return <div>Error</div>

  const handleDelete = async (id: string) => {
    try {
      const { data: deleteProductData } = await deleteProduct({
        variables: {
          deleteProductId: +id,
        },
      })
      const message = `${deleteProductData?.deleteProduct.name} deleted`
      enqueueSnackbar(message, { variant: 'success' })
    } catch (err: any) {
      enqueueSnackbar(err.message ?? 'Could not delete product.', { variant: 'error' })
    }
  }

  return (
    <CollapsibleTable<ProductSecondaryRowType, NestedProduct>
      tableDefinition={productsTableDefinition}
      tableData={formatProductsData(data.products as ProductsResponseType)}
      secondaryTableTitle="Product in warehouses"
      onDelete={handleDelete}
    />
  )
}

export default ProductsTable
