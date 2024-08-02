import * as React from 'react';
import { Form, Formik } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_HOTELS_ACTION } from '../../store/Hotels/hotelsAction.js';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const validationSchema = Yup.object({
  destination: Yup.string().required('Required'),
  checkIn: Yup.date().required('Required'),
  checkOut: Yup.date().required('Required'),
  adults: Yup.bool(),
  children: Yup.bool(),
});

export function Booking() {
  const dispatch = useDispatch();
  const hotelsState = useSelector((state) => state.hotels);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FETCH_HOTELS_ACTION());
  }, [dispatch]);

  const city = hotelsState.hotels.map((el) => el.city);

  const [checkedState, setCheckedState] = useState({
    adults: false,
    children: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const transformedValues = {
      ...values,
      checkIn: dayjs(values.checkIn).toISOString(),
      checkOut: dayjs(values.checkOut).toISOString(),
    };

    setSubmitting(false);
    resetForm();

    navigate('/hotels', { state: transformedValues });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Formik
        initialValues={{
          destination: null,
          checkIn: null,
          checkOut: null,
          adults: false,
          children: false,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, touched, errors }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                marginTop: '40px',
                paddingBottom: '40px',
              }}
            >
              <Box>
                <Autocomplete
                  disablePortal
                  options={city}
                  name="destination"
                  getOptionLabel={(city) => city}
                  onChange={(event, newValue) =>
                    setFieldValue('destination', newValue)
                  }
                  sx={{ width: 300, height: '56px' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Destination" />
                  )}
                />
                {touched.destination && errors.destination && (
                  <Box
                    sx={{
                      color: 'red',
                    }}
                  >
                    {errors.destination}
                  </Box>
                )}
              </Box>
              <Box>
                <DatePicker
                  label="Check in"
                  name="checkIn"
                  value={null}
                  onChange={(date1) => setFieldValue('checkIn', date1)}
                />
                {touched.checkIn && errors.checkIn && (
                  <Box
                    sx={{
                      color: 'red',
                    }}
                  >
                    {errors.checkIn}
                  </Box>
                )}
              </Box>
              <Box>
                <DatePicker
                  label="Check out"
                  name="checkOut"
                  onChange={(date2) => setFieldValue('checkOut', date2)}
                />
                {touched.checkOut && errors.checkOut && (
                  <Box
                    sx={{
                      color: 'red',
                    }}
                  >
                    {errors.checkOut}
                  </Box>
                )}
              </Box>
              <FormGroup
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '5px',
                  marginLeft: '10px',
                }}
              >
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="adults"
                        checked={checkedState.adults}
                        onChange={(event) => {
                          handleChange(event);
                          setFieldValue('adults', event.target.checked);
                        }}
                        sx={{ display: 'none' }}
                      />
                    }
                    label="Adults"
                    sx={{
                      borderRadius: '4px',
                      padding: '6px 16px',
                      height: '56px',
                      border: `2px solid ${checkedState.adults ? 'orange' : grey[400]}`,
                      cursor: 'pointer',
                    }}
                  />
                </Box>
                <Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="children"
                        checked={checkedState.children}
                        onChange={(event) => {
                          handleChange(event);
                          setFieldValue('children', event.target.checked);
                        }}
                        sx={{ display: 'none' }}
                      />
                    }
                    label="Children"
                    sx={{
                      borderRadius: '4px',
                      padding: '6px 16px',
                      height: '56px',
                      border: `2px solid ${checkedState.children ? 'orange' : grey[400]}`,
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </FormGroup>
              <Button
                variant="contained"
                color="warning"
                type="submit"
                sx={{ height: '56px' }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </LocalizationProvider>
  );
}
