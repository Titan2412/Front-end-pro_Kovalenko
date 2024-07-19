import { Footer, Header, PageLayout } from "../../components";
import style from "./Contacts.module.scss";

export function Contacts() {
  const { container } = style;
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <div className={container}>
          <h1>Contacts</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            eligendi corrupti perspiciatis blanditiis minima tenetur eum natus?
            Eligendi omnis et, iure nulla minus iste? Adipisci accusantium
            aperiam iure pariatur porro.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            <br />
            soluta mollitia excepturi error at eaque hic natus, quia dicta
            <br />
            exercitationem quasi distinctio ut labore magnam quibusdam provident
            <br />
            earum rem blanditiis. Consectetur iste, expedita aperiam soluta
            <br />
            assumenda magnam porro debitis voluptatibus nobis, beatae vero, quos
            <br />
            pariatur cum perferendis? Voluptatibus porro, perferendis ducimus
            <br />
            necessitatibus nam, provident totam expedita maxime soluta
            <br />
            asperiores magni. Dignissimos natus beatae tenetur, architecto rerum
            <br />
            eveniet maxime aut ipsam culpa consequatur in alias expedita,
            <br />
            maiores eligendi esse doloremque sequi numquam ut inventore.
            <br />
            Eligendi, ut vitae! Quod tempore minima corrupti. Placeat labore
            <br />
            minima ratione pariatur ipsum quas incidunt. Soluta dolorum quisquam
            <br />
            nulla repellat nemo consequuntur. Mollitia consequatur natus nisi
            <br />
            perspiciatis voluptatibus dicta molestiae harum cumque fugiat
            <br />
            quidem? Fuga, labore modi. Ab, a natus alias asperiores saepe
            <br />
            molestiae quod quibusdam tempora aut minima earum fugit nobis
            <br />
            possimus laborum numquam praesentium nostrum autem ad optio harum
            <br />
            sint! Facilis totam velit delectus libero! Hic sed, at id harum
            <br />
            voluptate provident obcaecati inventore perspiciatis omnis maiores
            <br />
            suscipit atque molestias placeat nesciunt. Dicta ex corrupti
            <br />
            blanditiis molestiae. Dignissimos ut ex, numquam ratione quis quod
            <br />
            consequatur? Molestiae iusto architecto corporis quasi inventore
            <br />
            necessitatibus eum, eos enim facere maiores consequatur commodi
            <br />
            cumque repudiandae voluptate aperiam distinctio atque fugiat
            <br />
            adipisci sint. Non culpa sequi amet facere ab laudantium.
            <br />
            Praesentium laboriosam reiciendis deserunt sit est eligendi possimus
            <br />
            atque expedita, ut a quam consectetur, voluptatibus repellendus
            <br />
            iste? Alias, maxime voluptates sit omnis, iure reprehenderit velit,
            <br />
            illum labore necessitatibus tempore nihil? Temporibus commodi
            <br />
            adipisci repellendus dolor, possimus vitae hic maxime cumque
            <br />
            doloremque iure voluptatem dolorum ex veniam architecto quia dolore
            <br />
            similique sapiente? Ipsam aut ipsa, nesciunt optio quis recusandae
            <br />
            nostrum labore. Dignissimos rem, corrupti consequuntur nesciunt
            <br />
            consectetur culpa est, esse similique hic adipisci nam neque
            <br />
            corporis asperiores laborum et, perferendis quos id nisi veritatis
            <br />
            aspernatur temporibus sequi voluptate aliquid. Dolores, ut!
            <br />
          </p>
        </div>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
