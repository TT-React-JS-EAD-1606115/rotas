import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { Departamentos } from "./pages/Departamentos";
import { Contatos } from "./pages/Contatos";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Menu />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/departamentos" element={<Departamentos />} />

            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
