import { useMutation } from '@apollo/client'
import { Add } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

import { defaultState, fieldsDefinition } from './AddWarehouseModal.model.ts'
import ModalComponent from '../../../../components/ui/ModalComponent/ModalComponent.tsx'
import SwitchWithLabel from '../../../../components/ui/SwitchWithLabel/SwitchWithLabel.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import {
  CreateWarehouseDocument,
  WarehouseInfoDocument,
  WarehousesTableDataDocument,
} from '../../../../graphql/generated.ts'

const AddWarehouseModal = () => {
  const [formState, setFormState] = useState(defaultState)

  const [createNewWarehouse, { loading, error }] = useMutation(CreateWarehouseDocument, {
    refetchQueries: [
      {
        query: WarehousesTableDataDocument,
        variables: { customerId: CUSTOMER_ID },
      },
      {
        query: WarehouseInfoDocument,
        variables: { customerId: CUSTOMER_ID },
      },
    ],
  })

  if (error) console.log('Add some error handling')
  if (loading) console.log('Add a Loading State')

  const toggleHazardous = () => setFormState((prev) => ({ ...prev, hazardous: !prev.hazardous }))

  const setState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async (closeModal: () => void) => {
    if (Object.values(formState).some((value) => value === '')) return
    await createNewWarehouse({
      variables: {
        ...formState,
        customerId: Number(CUSTOMER_ID),
        capacity: Number(formState.capacity),
      },
    })

    setFormState(defaultState)
    closeModal()
  }

  const isDisabled = ((state: typeof formState) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars --- hazardous is not used ---
    const { hazardous, ...rest } = state
    return Object.values(rest).some((value) => value === '')
  })(formState)

  return (
    <ModalComponent
      title="Create a new warehouse"
      triggerButtonName="New warehouse"
      onSave={handleSave}
      isSaveDisabled={isDisabled}
      startIcon={<Add />}
    >
      <SwitchWithLabel checked={formState.hazardous} toggleChecked={toggleHazardous} />
      {fieldsDefinition.map((field) => (
        <TextField
          key={field.name}
          onChange={setState}
          value={formState[field.name as keyof typeof formState]}
          name={field.name}
          label={field.label}
          variant="filled"
          type={field.type}
          fullWidth
        />
      ))}
    </ModalComponent>
  )
}

export default AddWarehouseModal
