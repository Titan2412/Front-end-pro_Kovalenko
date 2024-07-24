import style from "./Footer.module.scss";

export function Footer() {
  const { footer } = style;
  return (
    <div className={footer}>
      <p>&copy; Titan241</p>
    </div>
  );
}
