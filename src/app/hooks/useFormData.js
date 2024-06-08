import { useState } from 'react'
import { validateEmail, validatePhone } from '@/utils/utils'

export function useFormData() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: null,
    volumen: '',
  })
  const [error, setError] = useState({
    errorName: false,
    messageName: '',
    errorAddress: false,
    messageAddress: '',
    errorEmail: false,
    messageEmail: '',
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
        messageAddress: 'Please enter a valid email address',
      }))
    } else {
      setError(prev => ({ ...prev, errorAddress: false, messageAddress: '' }))
    }

    validateEmail(formData.email)
      ? setError(prev => ({ ...prev, errorEmail: false, messageEmail: '' }))
      : setError(prev => ({
          ...prev,
          errorEmail: true,
          messageEmail: 'Please enter a valid email address',
        }))

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
