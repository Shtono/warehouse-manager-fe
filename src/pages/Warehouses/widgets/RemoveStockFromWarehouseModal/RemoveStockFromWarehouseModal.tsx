import { useMutation, useQuery } from '@apollo/client'
import { Remove } from '@mui/icons-material'
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import { ChangeEvent, useState } from 'react'

import ModalComponent from '../../../../components/ui/ModalComponent/ModalComponent.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import {
  GetWarehouseContainersDocument,
  RemoveStockFromWarehouseDocument,
  WarehouseInfoDocument,
} from '../../../../graphql/generated.ts'

const defaultState = {
  description: '',
  containerId: '',
}

export type RemoveStockFromWarehouseModalProps = {
  warehouseId: string
}

const RemoveStockFromWarehouseModal = ({ warehouseId }: RemoveStockFromWarehouseModalProps) => {
  const [formState, setFormState] = useState(defaultState)
  const {
    data: containers,
    loading,
    error,
  } = useQuery(GetWarehouseContainersDocument, {
    variables: { warehouseId: +warehouseId },
  })

  const [removeStock] = useMutation(RemoveStockFromWarehouseDocument, {
    refetchQueries: [
      { query: WarehouseInfoDocument, variables: { customerId: CUSTOMER_ID } },
      { query: GetWarehouseContainersDocument, variables: { warehouseId: +warehouseId } },
    ],
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const handleSelectChange = (event: SelectChangeEvent) =>
    setFormState((prev) => ({ ...prev, containerId: event.target.value }))

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFormState((prev) => ({ ...prev, description: value }))
  }

  const isDisabled = Object.values(formState).some((value) => value === '')

  // Filter out hazardous/notHazardous products to match the selected Warehouse
  const productOptions = containers?.containers
    .filter((c) => c.state === 'ACTIVE')
    .map((container) => ({
      value: container.id,
      label: `${container.product.name} Qty: (${container.quantity}) Size: (${container.size})`,
    }))

  const handleSave = (closeModal: () => void) => {
    removeStock({
      variables: {
        containerId: +formState.containerId,
        warehouseId: +warehouseId,
        description: formState.description,
      },
    })
      .then((_data) => {
        enqueueSnackbar('Product successfully removed.', { variant: 'success' })
      })
      .catch(({ message }: any) =>
        enqueueSnackbar(message ?? 'Could not remove a product.', { variant: 'error' }),
      )
      .finally(() => {
        setFormState(defaultState)
        closeModal()
      })
  }

  return (
    <ModalComponent
      title="Remove a product from warehouse"
      triggerButtonName="Remove stock"
      onSave={handleSave}
      endIcon={<Remove />}
      isSaveDisabled={isDisabled}
      variant="outlined"
    >
      <Select
        placeholder="Select a product"
        onChange={handleSelectChange}
        value={formState.containerId}
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
        onChange={handleDescriptionChange}
        value={formState.description}
        name="description"
        label="Description"
        variant="filled"
        fullWidth
      />
    </ModalComponent>
  )
}

export default RemoveStockFromWarehouseModal
