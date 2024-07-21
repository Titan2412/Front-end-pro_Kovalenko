import { Footer, Header, PageLayout } from "../../components";
import { Forms } from "../../components/Forms";
import style from "./Homework.module.scss";

export function HomePage() {
  const { container, title } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div className={container}>
          <div className={title}>
            <h1>Homepage</h1>
          </div>
          <div>
            <Forms />
          </div>
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
