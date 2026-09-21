import logo from "../../assets/./images/logosemfundo.png";
import computador from "../../assets/./images/computador.png";
import "./style.css";

function Home({
  enviado,
  setEnviado,
  aoIrParaLogin,
  aoIrParaFaleConosco,
  aoIrParaHome,
  aoIrParaDoacoes,
  aoIrParaTransportes
}) {
  
  return (
    <div className="pagina-home">
      <header>
        <nav>
          <a href="#" className="logo" onClick={(e) => e.preventDefault()}>
            <img src={logo} alt="logo da SIAD Tech" />
          </a>

          <ul className="opcoes">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  aoIrParaHome();
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

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  aoIrParaTransportes();
                }}
              >
                Transporte
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  aoIrParaFaleConosco();
                }}
              >
                Fale Conosco
              </a>
            </li>
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
        <section className="hero">
          <div className="hero-texto">
            <h1>
              Conectando alimentos,<br />
              pessoas e esperança.
            </h1>

            <p>
              A SIAD Tech conecta doadores, produtores, ONGs e voluntários
              para transformar alimentos que seriam desperdiçados em
              oportunidades para quem precisa.
            </p>

            <button onClick={aoIrParaDoacoes}>
              Quero fazer uma doação
            </button>
          </div>

          <div className="hero-imagem">
            <img src={computador} alt="Computador representando a SIAD Tech" />
          </div>
        </section>

        <section className="sobre">
          <h2>Sobre a SIAD Tech</h2>

          <p>
            A SIAD Tech é uma solução tecnológica criada para auxiliar na
            distribuição de alimentos e combater o desperdício.
          </p>

          <p>
            Nossa plataforma aproxima quem possui alimentos disponíveis de
            organizações que podem destiná-los para pessoas em situação de
            vulnerabilidade.
          </p>
        </section>

        <section className="objetivos">
          <h2>Nosso objetivo</h2>

          <div className="cards">
            <div className="card">
              <h3>Reduzir desperdícios</h3>
              <p>
                Evitar que alimentos próprios para consumo sejam descartados.
              </p>
            </div>

            <div className="card">
              <h3>Conectar pessoas</h3>
              <p>
                Facilitar o contato entre doadores, produtores, ONGs e
                voluntários.
              </p>
            </div>

            <div className="card">
              <h3>Gerar impacto</h3>
              <p>
                Contribuir para uma distribuição mais eficiente dos alimentos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © 2026 SIAD Tech - Sistema Tecnológico de Distribuição de Alimentos
        </p>
      </footer>
    </div>
  );
}

export default Home;
