import {
  Box,
  Card as MUICard,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  Modal,
  Link,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { Forms } from '../Form/Form';

export function Card({ hotel }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { state } = useLocation();

  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <Link onClick={handleOpen} sx={{ textDecoration: 'none' }}>
        {loading && (
          <Box
            sx={{
              position: 'relative',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <CardMedia
          component="img"
          alt={hotel.name}
          height="140"
          image={hotel.photo}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          sx={{ display: loading ? 'none' : 'block' }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {hotel.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {hotel.phone_number}
          </Typography>
        </CardContent>
      </Link>
      <Modal open={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 1400,
            bgcolor: 'background.paper',
            border: '4px solid orange',
            boxShadow: 24,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              padding: '10px',
            }}
          >
            <Button
              sx={{
                bgcolor: 'red',
                minWidth: '30px',
                padding: 0,
                paddingTop: '3px',
                height: '30px',
                color: 'white',
                '&:hover': { backgroundColor: 'orange' },
              }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '30px',
              padding: '20px',
            }}
          >
            <Box sx={{ width: '30%' }}>
              <CardMedia
                component="img"
                alt={hotel.name}
                height="300px"
                image={hotel.photo}
                sx={{
                  borderRadius: '30px',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  City: {hotel.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {hotel.phone_number}
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{ width: '70%', display: 'flex', flexDirection: 'column' }}
            >
              <Typography sx={{ textAlign: 'center' }} variant="h4">
                Confirm your booking
              </Typography>
              <Box sx={{ marginTop: '20px' }}>
                <Typography variant="body1">
                  <strong>Destination:</strong> {state.destination}
                </Typography>
                <Typography variant="body1">
                  <strong>Check In:</strong>{' '}
                  {dayjs(state.checkIn).format('DD/MM/YYYY')}
                </Typography>
                <Typography variant="body1">
                  <strong>Check Out:</strong>{' '}
                  {dayjs(state.checkOut).format('DD/MM/YYYY')}
                </Typography>
                <Typography variant="body1">
                  <strong>Adults:</strong> {state.adults ? 'Yes' : 'No'}
                </Typography>
                <Typography variant="body1">
                  <strong>Children:</strong> {state.children ? 'Yes' : 'No'}
                </Typography>
              </Box>
              <Box>
                <Forms onClose={handleClose} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </MUICard>
  );
}
