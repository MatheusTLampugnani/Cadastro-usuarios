import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4 text-primary fw-bold">Bem-vindo ao Sistema de Cadastro</h1>
      <div className="d-flex gap-3">
        <Link to="/cadastro">
          <button className="btn btn-outline-primary px-4 py-2">Cadastrar Usuário</button>
        </Link>
        <Link to="/usuarios">
          <button className="btn btn-outline-secondary px-4 py-2">Lista de Usuários</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
