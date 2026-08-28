import { useState } from "react";
import "./login.css";

// Assim como no código original, o usuário e a senha corretos
// ficam fixos aqui (poderia vir de um backend futuramente).
const USUARIO_CORRETO = "Edson";
const SENHA_CORRETA = "1234";

function Login({ aoVoltar, aoEsqueciSenha, aoLogarComSucesso }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  function exibirErro(mensagem) {
    setMsgErro(mensagem);
    setTimeout(() => setMsgErro(""), 3000);
  }

  function handleEntrar() {
    const usuarioLimpo = usuario.trim();
    const senhaLimpa = senha.trim();

    if (usuarioLimpo === "" || senhaLimpa === "") {
      exibirErro("Preencha todos os campos.");
      return;
    }

    if (usuarioLimpo === USUARIO_CORRETO && senhaLimpa === SENHA_CORRETA) {
      aoLogarComSucesso();
    } else {
      exibirErro("Usuario ou senha incorretos.");
    }
  }

  const estiloMsgErro = {
    display: msgErro ? "block" : "none",
  };

  return (
    <main className="pagina-login">
      <div className="container">
        <button type="button" className="voltar" onClick={aoVoltar}>
          <i className="fa-solid fa-arrow-left"></i> Voltar
        </button>

        <h3 id="titulo">Entrar</h3>

        <div className="barras">
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="barras">
          <i className="fa-solid fa-lock"></i>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <label className="mostrar">
          <input
            type="checkbox"
            checked={mostrarSenha}
            onChange={(e) => setMostrarSenha(e.target.checked)}
          />{" "}
          Mostrar senha
        </label>

        <div>
          <p className="msg-erro" style={estiloMsgErro}>
            {msgErro}
          </p>
        </div>

        <button type="button" className="lembrar-link" onClick={aoEsqueciSenha}>
          Esqueci minha senha
        </button>

        <button className="entrar" onClick={handleEntrar}>
          Entrar <i className="fa-solid fa-square-arrow-up-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Login;
