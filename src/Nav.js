import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="nav-bar">
      <ul className="divs">
        <li>
          <Link to="/">Pagina principala</Link>
        </li>
        <li>
          <Link to="/Proiecte">Proiecte</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
