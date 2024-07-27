import { Container, Typography } from "@mui/material";
import { Footer, Header, PageLayout } from "../../components";
import AddTodo from "../../components/Todo/addTodo";
import TaskList from "../../components/Todo/TaskList";

export function Todo() {
  return (
    <PageLayout
      renderHeader={<Header />}
      renderContent={() => (
        <Container sx={{ marginLeft: "50px", marginTop: "50px" }}>
          <Typography variant="h1" sx={{ marginBottom: "30px" }}>
            TODO
          </Typography>
          <AddTodo />
          <TaskList />
        </Container>
      )}
      renderFooter={<Footer />}
    ></PageLayout>
  );
}
