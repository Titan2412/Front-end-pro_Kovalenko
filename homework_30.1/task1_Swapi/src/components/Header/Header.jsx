import style from "./Header.module.scss";

export function Header() {
  const { title } = style;
  return (
    <div>
      <h1 className={title}>SWAPI</h1>
    </div>
  );
}
