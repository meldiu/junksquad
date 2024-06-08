'use client'
import propTypes from 'prop-types'
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

export const DatePicker = ({ value, onChange, label, name }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        value={dayjs(value)}
        onChange={newValue => onChange(newValue)}
        label={label}
        name={name}
        views={['year', 'month', 'day']}
        minDate={dayjs()}
      />
    </LocalizationProvider>
  )
}

DatePicker.propTypes = {
  value: propTypes.any,
  onChange: propTypes.func,
  label: propTypes.string,
  name: propTypes.string,
}
