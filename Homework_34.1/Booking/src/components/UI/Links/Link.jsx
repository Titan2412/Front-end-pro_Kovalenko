import { forwardRef } from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { orange } from '@mui/material/colors';

export const Link = forwardRef(function CustomLink(props, ref) {
  return (
    <MuiLink color={orange[500]} component={RouterLink} ref={ref} {...props} />
  );
});
