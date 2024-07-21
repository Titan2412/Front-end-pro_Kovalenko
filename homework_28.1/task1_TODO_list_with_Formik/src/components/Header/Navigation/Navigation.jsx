import { NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.scss";

export function Navigation({ navAttrs }) {
  const { list, active, pending, testError } = style;
  return (
    <nav {...navAttrs}>
      <ul className={list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? active : isPending ? pending : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to={"/Contacts"}>Contacts</Link>
        </li>
        <li>
          <Link to={"/AboutMe"}>About me</Link>
        </li>
      </ul>
    </nav>
  );
}
