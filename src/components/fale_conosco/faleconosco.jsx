import { useState } from "react";
import logo from "../../assets/./images/logosemfundo.png";
import "./faleconosco.css";

// ── Funções de validação (mesma lógica do faleconosco.js original) ──
function validarNome(valor) {
  const quantidade = valor.length;
  if (quantidade < 10) return "Digite seu nome e sobrenome";
  if (quantidade > 50) return "Máximo de 50 caracteres.";
  return "";
}

function validarEmail(valor) {
  const quantidade = valor.length;
  let contadorArroba = 0;
  let contadorPonto = 0;

  for (let i = 0; i < valor.length; i++) {
    if (valor[i] === "@") contadorArroba++;
    if (valor[i] === ".") contadorPonto++;
  }

  if (quantidade > 80) return "Máximo de 80 caracteres.";
  if (contadorArroba !== 1) return "Digite seu email corretamente";
  if (contadorPonto < 1) return "O email deve possuir pelo menos um ponto.";
  return "";
}

function validarTelefone(valor) {
  const quantidade = valor.length;
  let contadorNumeros = 0;

  for (let i = 0; i < valor.length; i++) {
    if (valor[i] >= "0" && valor[i] <= "9") contadorNumeros++;
  }

  if (quantidade < 11) return "Digite os 11 números (DDD + número).";
  if (quantidade > 11) return "Máximo de 11 números.";
  if (contadorNumeros !== quantidade) return "Digite apenas números.";
  if (valor[2] !== "9") return "Após o DDD, o número deve começar com 9.";
  return "";
}

function validarMensagem(valor) {
  const quantidade = valor.length;
  if (quantidade < 10) return "Digite pelo menos 10 caracteres.";
  if (quantidade > 500) return "Máximo de 500 caracteres.";
  return "";
}

function FaleConosco({ aoVoltar, aoIrParaLogin, aoIrParaDoacoes }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroMensagem, setErroMensagem] = useState("");

  function handleNomeChange(e) {
    const valor = e.target.value;
    setNome(valor);
    setErroNome(validarNome(valor));
  }

  function handleEmailChange(e) {
    const valor = e.target.value;
    setEmail(valor);
    setErroEmail(validarEmail(valor));
  }

  function handleTelefoneChange(e) {
    const valor = e.target.value;
    setTelefone(valor);
    setErroTelefone(validarTelefone(valor));
  }

  function handleMensagemChange(e) {
    const valor = e.target.value;
    setMensagem(valor);
    setErroMensagem(validarMensagem(valor));
  }

  function handleEnviar() {
    const msgNome = validarNome(nome);
    const msgEmail = validarEmail(email);
    const msgTelefone = validarTelefone(telefone);
    const msgMensagem = validarMensagem(mensagem);

    setErroNome(msgNome);
    setErroEmail(msgEmail);
    setErroTelefone(msgTelefone);
    setErroMensagem(msgMensagem);

    const erros = [msgNome, msgEmail, msgTelefone, msgMensagem].filter(
      (msg) => msg !== ""
    );

    if (erros.length === 0) {
      alert("Mensagem enviada com sucesso!");
    } else if (erros.length > 1) {
      alert("Existem campos preenchidos incorretamente.");
    } else {
      if (msgNome) alert("Verifique o campo Nome.");
      if (msgEmail) alert("Verifique o campo Email.");
      if (msgTelefone) alert("Verifique o campo Telefone.");
      if (msgMensagem) alert("Verifique o campo Mensagem.");
    }
  }


  return (
    <div className="pagina-faleconosco">
      <header>
        <nav>
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              aoVoltar();
            }}
          >
            <img src={logo} alt="logo da SIAD Tech" />
          </a>

          <ul className="opcoes">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  aoVoltar();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  aoIrParaDoacoes();
                }}
              >
                Doações + ONGs
              </a>
            </li>
            <li><a href="#">Transporte</a></li>
            <li><a href="#"><span>Fale Conosco</span></a></li>
          </ul>

          <a
            href="#"
            className="button-header"
            onClick={(e) => {
              e.preventDefault();
              aoIrParaLogin();
            }}
          >
            Entrar
          </a>
        </nav>
      </header>

      <main>
        <div className="container-faleconosco">
          <div className="logo-main">
            <img src={logo} alt="imagem da logo da SIAD Tech" />
          </div>

          <div className="card">
            <p>
              Preencha seus dados e nossa equipe entrará em contato para
              responder quaisquer dúvidas sobre a SIAD Tech
            </p>

            <div className="barras">
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                value={nome}
                onChange={handleNomeChange}
              />
              <p id="erroNome">{erroNome}</p>

              <input
                type="email"
                id="email"
                placeholder="e-mail"
                value={email}
                onChange={handleEmailChange}
              />
              <p id="erroEmail">{erroEmail}</p>

              <input
                type="tel"
                id="telefone"
                placeholder="Whatsapp com DDD"
                value={telefone}
                onChange={handleTelefoneChange}
              />
              <p id="erroTelefone">{erroTelefone}</p>

              <textarea
                id="mensagem"
                placeholder="Digite sua mensagem"
                maxLength="500"
                value={mensagem}
                onChange={handleMensagemChange}
              ></textarea>
              <p id="erroMensagem">{erroMensagem}</p>
            </div>

            <button type="button" id="btnContato" className="btn-contato" onClick={handleEnviar}>
              Entrar em Contato
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>SIAD Tech - Tecnologia social contra o desperdício.</p>
      </footer>
    </div>
  );
}

export default FaleConosco;