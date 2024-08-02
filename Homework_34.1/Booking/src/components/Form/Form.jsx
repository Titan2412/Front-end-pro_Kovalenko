import { Box, Button, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SEND_BOOKING_ACTION } from '../../store/Booking/bookingAction';

const phoneRegExp =
  /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const validationSchema2 = Yup.object({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  secondName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  userPhone: Yup.string()
    .matches(phoneRegExp, 'Enter a correct phone number')
    .required('Required'),
  userEmail: Yup.string().email('Invalid email').required('Required'),
});

export function Forms({ onClose }) {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const data = Object.assign(state, values);

    dispatch(SEND_BOOKING_ACTION(data));
    setSubmitting(false);
    resetForm();
    onClose();
    alert('You have successfully booked your hotel!');
    navigate('/home');
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        secondName: '',
        userPhone: '',
        userEmail: '',
      }}
      validationSchema={validationSchema2}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <Typography variant="h5" textAlign="center">
            Your contact details
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            <Box>
              <TextField
                size="small"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                variant="outlined"
              />
              {touched.firstName && errors.firstName && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    color: 'red',
                  }}
                >
                  {errors.firstName}
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                size="small"
                label="Second Name"
                name="secondName"
                value={values.secondName}
                onChange={handleChange}
                variant="outlined"
              />
              {touched.secondName && errors.secondName && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    color: 'red',
                  }}
                >
                  {errors.secondName}
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                size="small"
                label="Phone"
                name="userPhone"
                value={values.userPhone}
                onChange={handleChange}
                variant="outlined"
              />
              {touched.userPhone && errors.userPhone && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    color: 'red',
                  }}
                >
                  {errors.userPhone}
                </Box>
              )}
            </Box>
            <Box>
              <TextField
                size="small"
                label="Email"
                name="userEmail"
                value={values.userEmail}
                onChange={handleChange}
                variant="outlined"
              />
              {touched.userEmail && errors.userEmail && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                    color: 'red',
                  }}
                >
                  {errors.userEmail}
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ marginTop: '40px' }} textAlign="center">
            <Button type="submit" variant="contained" color="warning">
              Confirm booking
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
