import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Sucesso from "./pages/sucesso";
import Usuarios from "./pages/usuarios";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [usuarios, setUsuarios] = useState([
    { nome: "Matheus Teixeira", email: "matheusteixeira@gmail.com" },
    { nome: "Gabriel Pavan", email: "gabrielpavan@gmail.com" }
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro setUsuarios={setUsuarios} />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/usuarios" element={<Usuarios usuarios={usuarios} />} />
      </Routes>
    </Router>
  );
}

export default App;
