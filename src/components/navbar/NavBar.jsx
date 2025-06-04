import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export default function NavBar(props) {
  // getting link and links name from Data/links
  const listLinks = props.links.map((el) => {
    return (
      <li key={crypto.randomUUID()}>
        <NavLink
          to={el.url}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {el.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={classes.navbar}>
      <ul>{listLinks}</ul>
    </nav>
  );
}
