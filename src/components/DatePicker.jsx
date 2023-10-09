import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';

function DatePick({ onDateChange }) {
  const handleDateChange = (date) => {
    onDateChange(date.format('DD-MM-YYYY'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker onChange={handleDateChange} />
    </LocalizationProvider>
  );
}

export default DatePick;