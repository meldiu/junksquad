'use client'
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
    <Box
      autoComplete="off"
      component={'form'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        padding: '10rem 8rem',
      }}
    >
      <TextField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={error.errorName}
        helperText={error.messageName}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={error.errorEmail}
        helperText={error.messageEmail}
      />
      <TextField
        label="Phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        inputProps={{ maxLength: 15 }}
        placeholder="123 456 7890"
        error={error.errorPhone}
        helperText={error.messagePhone}
        InputProps={{
          startAdornment: <InputAdornment position="start">+1</InputAdornment>,
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
        <MenuItem value={'1/4 Truck'}>1/4</MenuItem>
        <MenuItem value={'1/2 Truck'}>1/2</MenuItem>
        <MenuItem value={'3/4 Truck'}>3/4</MenuItem>
        <MenuItem value={'Full Truck'}>Full</MenuItem>
        <MenuItem value={'+1 Truck'}>More!</MenuItem>
      </Select>
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  )
}
