import { Box, Typography } from '@mui/material';
import { LogoCircle } from '../LogoCircle';
import { Link } from '../UI';
import { ButtonGroup } from './ButtonGroup';

export function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        padding: '10px',
        paddingLeft: '50px',
        paddingRight: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <LogoCircle />
        <Link to="/" underline="none">
          <Typography sx={{ fontWeight: 900, fontSize: '30px' }}>
            Booking
          </Typography>
        </Link>
      </Box>
      <Box>
        <ButtonGroup />
      </Box>
    </Box>
  );
}
