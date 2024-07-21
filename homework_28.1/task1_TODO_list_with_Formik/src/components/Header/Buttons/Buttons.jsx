import style from "./Buttons.module.scss";
import { ThemeButton } from "../../../UI";

export function Buttons() {
  const { container } = style;

  return (
    <div className={container}>
      <ThemeButton />
    </div>
  );
}