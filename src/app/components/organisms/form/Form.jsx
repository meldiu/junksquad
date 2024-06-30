'use client'
import styles from './Form.module.css'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { BUSINESS_PHONE } from '@/utils/const'

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: null,
    },
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async data => {
    setLoading(true)

    const formDataObj = new FormData()

    for (const key in data) {
      formDataObj.append(key, data[key])
    }

    const result = await fetch('/api/send', {
      method: 'POST',
      body: formDataObj,
    })

    if (result.status === 200) {
      setLoading(false)
      reset()
    }

    if (result.status === 500) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <Box
      autoComplete="off"
      component={'form'}
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={styles.title}>
        {`Fill out the form below to schedule a consultation and take the first
        step towards a clutter-free life!`}
      </h3>
      <TextField
        label="Full name"
        name="name"
        id="name"
        type="text"
        {...register('name', {
          required: 'El nombre es obligatorio',
          minLength: {
            value: 3,
            message: 'El nombre debe tener al menos 3 caracteres',
          },
          maxLength: {
            value: 48,
            message: 'El nombre no puede exceder los 48 caracteres',
          },
        })}
      />
      {errors.name && (
        <span className={styles.error}>{errors.name.message}</span>
      )}

      <TextField
        label="Phone number"
        name="phone"
        id="phone"
        type="tel"
        placeholder="123 456 7890"
        InputProps={{
          startAdornment: <InputAdornment position="start">+1</InputAdornment>,
          maxLength: 15,
        }}
        {...register('phone', {
          required: 'El número de teléfono es obligatorio',
          pattern: {
            value: /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
            message: 'Número de teléfono no válido',
          },
        })}
      />
      {errors.phone && (
        <span className={styles.error}>{errors.phone.message}</span>
      )}

      <TextField
        label="Address"
        name="address"
        id="address"
        type="text"
        {...register('address', {
          required: 'La dirección es obligatoria',
          minLength: {
            value: 6,
            message: 'La dirección debe tener al menos 6 caracteres',
          },
          maxLength: {
            value: 255,
            message: 'La dirección no puede exceder los 255 caracteres',
          },
        })}
      />
      {errors.address && (
        <span className={styles.error}>{errors.address.message}</span>
      )}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          control={control}
          name="date"
          rules={{ required: 'La fecha es obligatoria' }}
          render={({ field }) => (
            <DatePicker
              label="Select your desired pick-up date"
              value={field.value}
              onChange={newValue => field.onChange(newValue)}
              inputRef={field.ref}
              minDate={dayjs()}
            />
          )}
        />
      </LocalizationProvider>

      {errors.date && (
        <span className={styles.error}>{errors.date.message}</span>
      )}

      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{
          width: '100%',
          color: 'inherit',
          boxShadow: 'none',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          background: 'var(--spring--green--300)',
          ':hover': {
            background: 'var(--spring--green--400)',
            boxShadow: 'none',
          },
          ':active': {
            background: 'var(--spring--green--500)',
            boxShadow: 'none',
          },
        }}
        onClick={handleSubmit}
      >
        {`Send`}
        {loading && 'ing...'}
      </Button>
      {error && (
        <span
          className={styles.error}
        >{`Something went wrong sending the form. Contact us at ${BUSINESS_PHONE}`}</span>
      )}
    </Box>
  )
}
