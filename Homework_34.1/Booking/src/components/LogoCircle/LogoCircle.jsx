import { Box } from '@mui/material';

export function LogoCircle() {
  return (
    <Box
      component="span"
      sx={{
        display: 'block',
        bgcolor: 'warning.main',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
      }}
    />
  );
}
