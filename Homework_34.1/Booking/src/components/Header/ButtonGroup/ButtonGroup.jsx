import { NavLink } from '../../UI';
import { ButtonGroup as ButtonGroups } from '@mui/material';

export function ButtonGroup() {
  return (
    <ButtonGroups sx={{ display: 'flex', gap: 2 }}>
      <NavLink to="/Home" color="warning" variant="contained">
        Home
      </NavLink>
      <NavLink to="/about" color="warning" variant="contained">
        About
      </NavLink>
    </ButtonGroups>
  );
}
