import { Footer, Header, PageLayout, TodoForm } from "../../components";
import style from "./Homework.module.scss";

export function HomePage() {
  const { container, title, todos } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div className={container}>
          <div className={title}>
            <h1>Homepage</h1>
          </div>
          <div className={todos}>
            <TodoForm />
          </div>
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
