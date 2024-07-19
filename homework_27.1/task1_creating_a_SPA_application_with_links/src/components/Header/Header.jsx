import { Buttons } from "./Buttons";
import style from "./Header.module.scss";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  const { header } = style;
  return (
    <div className={header}>
      <Logo />
      <Navigation />
      <Buttons />
    </div>
  );
}
