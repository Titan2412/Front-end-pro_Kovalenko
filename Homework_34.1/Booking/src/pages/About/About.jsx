import { Box, Typography } from '@mui/material';
import { Footer, Header, PageLayout } from '../../components';

export function About() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h1">About</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste
            impedit nihil a, consequuntur eveniet. Voluptate ducimus cumque quos
            exercitationem harum impedit nam sit et nihil. Unde cupiditate
            repellendus quasi? Quos velit cumque quis dignissimos a ullam,
            labore necessitatibus, non dolor natus repudiandae eius amet veniam
            illum tempore, enim eum esse excepturi ad? Ducimus ab aperiam
            deserunt! Voluptatibus, commodi! Veritatis?
          </Typography>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
