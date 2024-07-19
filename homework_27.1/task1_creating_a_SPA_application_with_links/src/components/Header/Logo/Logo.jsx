import style from "./Logo.module.scss";

export function Logo() {
  const { logo } = style;
  return (
    <div className={logo}>
      <a href="/">LOGO</a>
    </div>
  );
}
