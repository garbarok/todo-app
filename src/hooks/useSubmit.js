import { useState } from 'react'

export const useForm = (initialSubmit = {}) => {
  const [formState, setFormState] = useState(initialSubmit)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState((currentFormState) => ({
      ...currentFormState,
      [name]: value,
    }))
  }

  const onResetForm = () => {
    setFormState(initialSubmit)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
