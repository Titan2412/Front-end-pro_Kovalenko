import { AppBar, Box, Container } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

export function PageLayout({ renderHeader, renderFooter, renderContent }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        minHeight: '100vh',
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: grey[200],
          color: orange[500],
        }}
      >
        <header>{renderHeader()}</header>
      </AppBar>
      <Container sx={{ flex: '1 0 100%', height: 'auto' }}>
        <main>{renderContent()}</main>
      </Container>
      <Box
        component="footer"
        sx={{
          flex: '0 0 100%',
          height: 'auto',
          p: 5,
          backgroundColor: grey[200],
          color: orange[500],
          padding: '15px',
        }}
      >
        <Container>
          <footer>{<Box component="footer">{renderFooter()}</Box>}</footer>
        </Container>
      </Box>
    </Box>
  );
}
