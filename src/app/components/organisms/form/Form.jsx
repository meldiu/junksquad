'use client'
import styles from './Form.module.css'
import { useFormData } from '@/hooks/useFormData'
import { DatePicker } from '@/components/molecules/DatePicker'
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

export const Form = () => {
  const { formData, handleChange, handleDateChange, handleSubmit, error } =
    useFormData()

  return (
    <Box autoComplete="off" component={'form'} className={styles.form}>
      <h3 className={styles.title}>
        Fill out the form below to schedule a consultation and take the first
        step towards a clutter-free life!
      </h3>
      <TextField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={error.errorName}
        helperText={error.messageName}
        inputProps={{ maxLength: 48 }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={error.errorEmail}
        helperText={error.messageEmail}
        inputProps={{ maxLength: 62 }}
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
        label="Select your pickup date"
        name="date"
      />
      <Select
        value={formData.volumen}
        label="Volumen"
        name="volumen"
        onChange={handleChange}
      >
        <MenuItem value={'1/4 Truck'}>1/4 Truck</MenuItem>
        <MenuItem value={'1/2 Truck'}>1/2 Truck</MenuItem>
        <MenuItem value={'3/4 Truck'}>3/4 Truck</MenuItem>
        <MenuItem value={'Full Truck'}>Full truck 🚛</MenuItem>
        <MenuItem value={'+1 Truck'}>More!</MenuItem>
      </Select>

      <Button
        variant="contained"
        type="submit"
        sx={{ width: '100%' }}
        // disabled={error.errorName || error.errorEmail || error.errorPhone}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </Box>
  )
}
