import { useMutation } from '@apollo/client'

import { TextField } from '@mui/material'

import { useSnackbar } from 'notistack'
import { ChangeEvent, useState } from 'react'

import { defaultState, fieldsDefinition } from './AddProductModal.model'
import ModalComponent from '../../../../components/ui/ModalComponent/ModalComponent'
import SwitchWithLabel from '../../../../components/ui/SwitchWithLabel/SwitchWithLabel.tsx'
import { CUSTOMER_ID } from '../../../../config/environment.ts'
import {
  ProductsTableQueryDocument,
  CreateProductMutationDocument,
} from '../../../../graphql/generated.ts'

const AddProductModal = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [isHazardous, setIsHazardous] = useState(false)
  const [formState, setFormState] = useState(defaultState)

  const [addProduct] = useMutation(CreateProductMutationDocument, {
    refetchQueries: [{ query: ProductsTableQueryDocument, variables: { customerId: CUSTOMER_ID } }],
  })

  const toggleHazardous = () => setIsHazardous((prev) => !prev)
  const setState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const isDisabled = Object.values(formState).some((value) => value === '')

  const handleSave = (closeModal: () => void) => {
    // Double check for any empty values
    if (Object.values(formState).some((value) => value === '')) return
    addProduct({
      variables: {
        ...formState,
        price: Number(formState.price),
        size: Number(formState.size),
        hazardous: isHazardous,
        customerId: Number(CUSTOMER_ID),
      },
    })
      .then((data) => {
        enqueueSnackbar(`Product ${data?.data?.createProduct?.name} has been added`, {
          variant: 'success',
        })
      })
      .catch((err) => {
        enqueueSnackbar(err.message ?? 'Could not add a new product.', { variant: 'error' })
      })
      .finally(() => {
        setFormState(defaultState)
        closeModal()
      })
  }
  return (
    <ModalComponent
      title="Create a new product"
      triggerButtonName="Add new product"
      onSave={handleSave}
      isSaveDisabled={isDisabled}
    >
      <>
        <SwitchWithLabel checked={isHazardous} toggleChecked={toggleHazardous} />
        {fieldsDefinition.map((field) => (
          <TextField
            key={field.name}
            onChange={setState}
            value={formState[field.name as keyof typeof formState]}
            name={field.name}
            label={field.label}
            variant="filled"
            fullWidth
            type={field.type}
          />
        ))}
      </>
    </ModalComponent>
  )
}

export default AddProductModal
