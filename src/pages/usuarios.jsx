import { Link } from "react-router-dom";

function Usuarios({ usuarios }) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5 w-50">
        <h2 className="text-center text-primary fw-bold mb-4">Lista de Usuários</h2>
        <ul className="list-group">
          {usuarios.map((usuario, index) => (
            <li key={index} className="list-group-item rounded-3 shadow-sm mb-2">
              <strong>{usuario.nome}</strong> - {usuario.email}
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <Link to="/">
            <button className="btn btn-outline-secondary px-4 py-2">Voltar à Página Inicial</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
