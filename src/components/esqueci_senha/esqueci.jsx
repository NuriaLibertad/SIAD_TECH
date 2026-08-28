import { useState } from "react";
import "./esqueci.css";

function EsqueciSenha({ aoVoltar }) {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // equivalente ao event.preventDefault() do JS original

    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {
      alert("Senha redefinida com sucesso!");
      // Em um cenário real, aqui entraria a requisição para o servidor
    }
  }

  return (
    <div className="pagina-esqueci main-container">
      <div className="password-card">
        <div className="card-header">
          <button type="button" className="back-button" onClick={aoVoltar}>
            <i className="fa-solid fa-arrow-left"></i>
            Voltar
          </button>
          <h1>Redefinir Senha</h1>
        </div>

        <form id="resetPasswordForm" onSubmit={handleSubmit}>
          <div className="campo-senha">
            <i className="fa-solid fa-lock input-icon"></i>
            <input
              type={mostrarNovaSenha ? "text" : "password"}
              id="newPassword"
              placeholder="Nova senha*"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              required
            />
            <i
              className={`fa-solid toggle-password ${
                mostrarNovaSenha ? "fa-eye" : "fa-eye-slash"
              }`}
              onClick={() => setMostrarNovaSenha(!mostrarNovaSenha)}
            ></i>
          </div>

          <div className="campo-senha">
            <i className="fa-solid fa-lock input-icon"></i>
            <input
              type={mostrarConfirmarSenha ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmar a nova senha*"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
            <i
              className={`fa-solid toggle-password ${
                mostrarConfirmarSenha ? "fa-eye" : "fa-eye-slash"
              }`}
              onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
            ></i>
          </div>

          <p className="required-note">*Campos obrigatórios</p>

          <button type="submit" className="submit-button">
            Alterar
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EsqueciSenha;