'use client'
import styles from './Form.module.css'
import { useFormData } from '@/hooks/useFormData'
import { DatePicker } from '@/components/molecules/DatePicker'
import { Box, Button, InputAdornment, TextField } from '@mui/material'

export const Form = () => {
  const { formData, handleChange, handleDateChange, handleSubmit, error } =
    useFormData()

  return (
    <Box autoComplete="off" component={'form'} className={styles.form}>
      <h3 className={styles.title}>
        {`Fill out the form below to schedule a consultation and take the first
        step towards a clutter-free life!`}
      </h3>
      <TextField
        label="Full name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={error.errorName}
        helperText={error.messageName}
        inputProps={{ maxLength: 48 }}
      />
      <TextField
        label="Phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        placeholder="123 456 7890"
        error={error.errorPhone}
        helperText={error.messagePhone}
        InputProps={{
          startAdornment: <InputAdornment position="start">+1</InputAdornment>,
          maxLength: 15,
        }}
      />
      <TextField
        label="Address"
        name="address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        error={error.errorAddress}
        helperText={error.messageAddress}
        inputProps={{ maxLength: 220 }}
      />
      <DatePicker
        value={formData.date}
        onChange={handleDateChange}
        label="Select your desired pick-up date"
        name="date"
      />

      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{
          width: '100%',
          color: 'inherit',
          boxShadow: 'none',
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
        // disabled={error.errorName || error.errorPhone}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Box>
  )
}
