import { Link } from "react-router-dom";

export default function MyNav() {
  return (
    <header>
      <nav>
        <Link to={"/lamps"}>Lumia</Link> |&nbsp;
        <Link to={"/contact"}>Contact Us</Link> |&nbsp;
      </nav>
    </header>
  );
}
