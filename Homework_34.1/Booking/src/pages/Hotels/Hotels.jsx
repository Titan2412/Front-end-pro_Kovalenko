import { Box, Typography } from '@mui/material';
import { Footer, Header, PageLayout } from '../../components';
import { List } from '../../components/HotelList/HotelList';

export function Hotels() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box sx={{ marginTop: '20px' }}>
          <Typography sx={{marginBottom: '20px'}} variant="h4">Hotels</Typography>
          <List />
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
