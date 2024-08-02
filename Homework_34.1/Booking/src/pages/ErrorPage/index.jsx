import { Box, Typography } from '@mui/material';
import { Footer, Header, PageLayout } from '../../components';

export function ErrorPage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            margin: '25%',
          }}
        >
          <Typography variant="h1" color="orange" sx={{ fontWeight: 800 }}>
            Error
          </Typography>
          <Typography paragraph={true}>Sorry, Page not Found.</Typography>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
