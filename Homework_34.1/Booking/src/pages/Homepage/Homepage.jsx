import { Box, Typography } from '@mui/material';
import { Booking, Footer, PageLayout } from '../../components';
import { Header } from '../../components/Header/Header';
import { orange } from '@mui/material/colors';

export function Homepage() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box>
          <Booking />
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Travel With{' '}
            <Box component="span" sx={{ color: orange[500] }}>
              Booking
            </Box>
          </Typography>
          <Typography variant='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic
            molestias repellendus eius officiis consequatur dicta itaque
            voluptatem modi at, distinctio veritatis laborum dolor omnis ipsa in
            doloremque blanditiis voluptas. Suscipit, vero? Blanditiis, ab! Ipsa
            vero veniam ea odio beatae! Eos corporis sunt quam, minus fugit
            ducimus nihil amet, veritatis adipisci pariatur non. Tenetur,
            voluptatum neque. Corrupti vitae error unde?
          </Typography>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
