import { Link } from "react-router-dom";
import "./styles.css";

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/departamentos">Departamentos</Link>
        </li>

        <li>
          <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};
