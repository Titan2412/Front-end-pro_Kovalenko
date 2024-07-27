import {
  Link,
  Box,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Footer, Header, PageLayout } from "../../components";

export function Homepage() {
  return (
    <PageLayout
      renderHeader={<Header />}
      renderContent={() => (
        <Container maxWidth="xl">
          <Box sx={{ marginTop: "50px" }}>
            <Typography variant="h3">Коваленко Андрій Юрійович</Typography>
            <List>
              <ListItem>
                <Typography variant="p">
                  <strong>Електронна пошта:</strong>{" "}
                  andrii.kovalenko241@gmail.com
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Телефон:</strong> +380956628799
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Адреса:</strong> Харків
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>GitHub:</strong>{" "}
                  <Link href="https://github.com/Titan2412" underline="none">
                    https://github.com/Titan2412
                  </Link>
                </Typography>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Typography variant="p">
                  <strong>Технічні навички:</strong>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Мова програмування:</strong> JavaScript.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Фреймворки та бібліотеки:</strong> React, Next.js,
                  Redux Toolkit, React Router, Formik.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Розмітка та стилізація::</strong> HTML, CSS,
                  SCSS/SASS, Styled-components, Material UI, Bootstrap.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="p">
                  <strong>Інструменти:</strong> Gulp WebPack, Vite.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Container>
      )}
      renderFooter={<Footer />}
    ></PageLayout>
  );
}
