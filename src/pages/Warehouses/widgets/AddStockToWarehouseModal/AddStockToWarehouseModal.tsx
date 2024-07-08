import { useMutation, useQuery } from '@apollo/client'
import { Add } from '@mui/icons-material'
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { ChangeEvent, useState } from 'react'

import ModalComponent from '../../../../components/ui/ModalComponent/ModalComponent.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import {
  AddStockToWarehouseDocument,
  GetWarehouseContainersDocument,
  ProductOptionsDocument,
  WarehouseInfoDocument,
} from '../../../../graphql/generated.ts'

const defaultState = {
  description: '',
  productId: '',
  quantity: '',
}

export type AddStockToWarehouseModalProps = {
  warehouseId: string
  hazardous: boolean
}

const AddStockToWarehouseModal = ({ warehouseId, hazardous }: AddStockToWarehouseModalProps) => {
  const [formState, setFormState] = useState(defaultState)
  const {
    data: products,
    loading,
    error,
  } = useQuery(ProductOptionsDocument, {
    variables: { customerId: CUSTOMER_ID },
  })

  const [addStockToWarehouse] = useMutation(AddStockToWarehouseDocument, {
    refetchQueries: [
      { query: WarehouseInfoDocument, variables: { customerId: CUSTOMER_ID } },
      { query: GetWarehouseContainersDocument, variables: { warehouseId: +warehouseId } },
    ],
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const setState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (event: SelectChangeEvent) =>
    setFormState((prev) => ({ ...prev, productId: event.target.value }))

  const isDisabled = Object.values(formState).some((value) => value === '')

  // Filter out hazardous/notHazardous products to match the selected Warehouse
  const productOptions = products?.products
    .filter((product) => product.hazardous === hazardous)
    .map((pr) => ({ label: pr.name, value: pr.id }))

  const handleSave = (closeModal: () => void) => {
    addStockToWarehouse({
      variables: {
        productId: +formState.productId,
        warehouseId: +warehouseId,
        quantity: +formState.quantity,
        description: formState.description,
      },
    })
      .then((data) => {
        console.log('Data: ', data.data?.addStockToWarehouse)
        if (data.data?.addStockToWarehouse.error) {
          enqueueSnackbar(data.data?.addStockToWarehouse.error, { variant: 'error' })
          return
        }
        enqueueSnackbar('Product successfully added to warehouse.', { variant: 'success' })
      })
      .catch((err: any) =>
        enqueueSnackbar(err.message ?? 'Could not add a product.', { variant: 'error' }),
      )
      .finally(() => {
        setFormState(defaultState)
        closeModal()
      })
  }

  return (
    <ModalComponent
      title="Add product to warehouse"
      triggerButtonName="Add stock"
      onSave={handleSave}
      startIcon={<Add />}
      isSaveDisabled={isDisabled}
      variant="outlined"
    >
      <Select
        placeholder="Select a product"
        onChange={handleSelectChange}
        value={formState.productId}
        label="Product"
        variant="filled"
        fullWidth
      >
        <MenuItem disabled value="default">
          Select a product
        </MenuItem>
        {productOptions?.map(({ value, label }) => <MenuItem value={value}>{label}</MenuItem>)}
      </Select>
      <TextField
        onChange={setState}
        value={formState.description}
        name="description"
        label="Description"
        variant="filled"
        fullWidth
      />
      <TextField
        onChange={setState}
        value={formState.quantity}
        name="quantity"
        label="Quantity"
        variant="filled"
        type="number"
        fullWidth
      />
    </ModalComponent>
  )
}

export default AddStockToWarehouseModal
