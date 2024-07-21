import { Footer, Header, PageLayout } from "../../components";
import style from "./ErrorPage.module.scss";

export function ErrorPage() {
  const { container, label } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderContent={() => (
        <div className={container}>
          <h1>Error!</h1>
          <p className={label}>404</p>
          <p>Wrong address.</p>
        </div>
      )}
    />
  );
}
