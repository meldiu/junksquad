'use client'
import styles from './Form.module.css'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BUSINESS_PHONE } from '@/utils/const'
import dayjs from 'dayjs'

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
      <div className={styles['input-group']}>
        <TextField
          label="Full name"
          name="name"
          id="name"
          type="text"
          {...register('name', {
            required: 'Please enter a name',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long',
            },
            maxLength: {
              value: 48,
              message: 'Name must not exceed 48 characters',
            },
          })}
          error={!!errors.name}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles['input-group']}>
        <TextField
          label="Phone number"
          name="phone"
          id="phone"
          type="tel"
          placeholder="123 456 7890"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+1</InputAdornment>
            ),
            maxLength: 15,
          }}
          error={!!errors.phone}
          {...register('phone', {
            required: 'Please enter a phone number',
            pattern: {
              value: /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: 'Please enter a valid phone number',
            },
            minLength: {
              value: 10,
              message: 'Phone number must be at least 10 digits long',
            },
          })}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
      </div>

      <div className={styles['input-group']}>
        <TextField
          label="Address"
          name="address"
          id="address"
          type="text"
          {...register('address', {
            required: 'Please enter an address',
            minLength: {
              value: 6,
              message: 'Address must be at least 5 characters long',
            },
            maxLength: {
              value: 255,
              message: 'Address must not exceed 255 characters',
            },
          })}
          error={!!errors.address}
        />
        {errors.address && (
          <span className={styles.error}>{errors.address.message}</span>
        )}
      </div>

      <div className={styles['input-group']}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            control={control}
            name="date"
            rules={{ required: 'Please enter a date' }}
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
      </div>

      <div className={styles['input-group']}>
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
          disabled={loading}
        >
          {`Send`}
          {loading && 'ing...'}
        </Button>
        {error && (
          <span
            className={styles.error}
          >{`Something went wrong sending the form. Contact us at ${BUSINESS_PHONE}`}</span>
        )}
      </div>
    </Box>
  )
}
