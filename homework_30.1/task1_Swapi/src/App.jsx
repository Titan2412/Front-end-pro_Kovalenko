import { PageLayout, Header, SwapiList, Footer } from "./components";
import style from "./services/style/App.module.scss";

export function App() {
  const { wrapper } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div className={wrapper}>
          <SwapiList />
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
