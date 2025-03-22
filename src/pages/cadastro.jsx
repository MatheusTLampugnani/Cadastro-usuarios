import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro({ setUsuarios }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmacaoSenha: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmacaoSenha) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
    if (formData.senha !== formData.confirmacaoSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    setUsuarios((prev) => [...prev, { nome: formData.nome, email: formData.email }]);
    navigate("/sucesso");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-lg w-50">
        <h2 className="text-center text-primary fw-bold mb-4">Cadastro de Usuário</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" name="nome" className="form-control rounded-3" value={formData.nome} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input type="email" name="email" className="form-control rounded-3" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" name="senha" className="form-control rounded-3" value={formData.senha} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirme a senha</label>
            <input type="password" name="confirmacaoSenha" className="form-control rounded-3" value={formData.confirmacaoSenha} onChange={handleChange} />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary px-4 py-2 rounded-3" type="button" onClick={() => navigate("/")}>Voltar</button>
            <button className="btn btn-outline-success px-4 py-2 rounded-3" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
