import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContacts = () => {
    navigate("/contatos");
  };

  return (
    <div className="home">
      <h1>Home Page</h1>

      <button onClick={handleNavigateToContacts}>Navegar para contatos</button>
    </div>
  );
};
