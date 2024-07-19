import { Footer, Header, PageLayout } from "../../components";
import style from "./AboutMe.module.scss";

export function AboutMe() {
  const { container } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div className={container}>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            itaque!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consectetur doloribus dolore, quibusdam vitae, laudantium error
            voluptate unde saepe amet iure mollitia libero, voluptatibus vel
            fuga eius esse ratione cum.
          </p>
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
