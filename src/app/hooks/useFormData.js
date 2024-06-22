import { useState } from 'react'
import { validatePhone } from '@/utils/utils'

export function useFormData() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: new Date(),
  })
  const [error, setError] = useState({
    errorName: false,
    messageName: '',
    errorAddress: false,
    messageAddress: '',
    errorPhone: false,
    messagePhone: '',
  })

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = date => {
    setFormData({ ...formData, date })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (formData.name.length < 3) {
      setError(prev => ({
        ...prev,
        errorName: true,
        messageName: 'Please enter a valid name',
      }))
    } else {
      setError(prev => ({ ...prev, errorName: false, messageName: '' }))
    }

    if (formData.address.length < 6) {
      setError(prev => ({
        ...prev,
        errorAddress: true,
        messageAddress: 'Please enter a valid address',
      }))
    } else {
      setError(prev => ({ ...prev, errorAddress: false, messageAddress: '' }))
    }

    validatePhone(formData.phone)
      ? setError(prev => ({ ...prev, errorPhone: false, messagePhone: '' }))
      : setError(prev => ({
          ...prev,
          errorPhone: true,
          messagePhone: 'Please enter a valid phone number',
        }))

    if (!Object.values(error).some(value => value === true))
      console.log(formData)
  }

  return {
    formData,
    handleChange,
    handleDateChange,
    handleSubmit,
    error,
  }
}
