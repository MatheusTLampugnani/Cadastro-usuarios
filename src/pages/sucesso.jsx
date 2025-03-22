import { Link } from "react-router-dom";

function Sucesso() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="alert alert-success text-center shadow-lg px-5 py-3">Cadastro realizado com sucesso!</h2>
      <Link to="/">
        <button className="btn btn-outline-primary mt-3 px-4 py-2">Voltar à Página Inicial</button>
      </Link>
    </div>
  );
}

export default Sucesso;
