import { Box, Typography } from "@mui/material";
import { Footer, Header, PageLayout, SwapiList } from "../../components";

export function Swapi() {
  return (
    <PageLayout
      renderHeader={<Header />}
      renderContent={() => (
        <Box>
          <Typography
            variant="h1"
            sx={{ display: "flex", justifyContent: "center", margin: "50px" }}
          >
            SWAPI
          </Typography>
          <SwapiList />
        </Box>
      )}
      renderFooter={<Footer />}
    ></PageLayout>
  );
}
