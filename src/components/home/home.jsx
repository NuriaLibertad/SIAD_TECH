import logo from "../../assets/./images/logosemfundo.png";   
import computador from "../../assets/./images/computador.png";
import "./style.css";

function Home({ enviado, setEnviado, aoIrParaLogin, aoIrParaFaleConosco, aoIrParaHome, aoIrParaDoacoes }) {
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
            <li><a href="#">Transporte</a></li>
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
        <section className="hero" id="inicio">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <h1>Tecnologia que conecta alimentos a quem realmente precisa.</h1>
                <p>
                  Uma plataforma que aproxima doadores e ONGs para transformar
                  excedentes em esperança.
                </p>
                <a
                  href="#"
                  id="btn-conexao"
                  className="botao-rosa"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Conexão realizada com sucesso! Entraremos em contato.");
                    setEnviado(true);
                  }}
                >
                  {enviado ? "Enviado!" : "Faça conexão"}
                </a>
              </div>

              <div className="col-md-7 text-center">
                <img src={computador} alt="Imagem do computador" className="img-computador" />
              </div>
            </div>
          </div>
        </section>

        <section className="texto-centro">
          <div className="container">
            <h2>Transforme excedentes em esperança.</h2>
            <p>Alimentos que poderiam virar descarte passam a abastecer quem precisa.</p>

            <p>
              Assista ao nosso vídeo institucional clicando{" "}
              <a href="https://www.youtube.com/watch?v=vX-di5hc6xI" target="_blank" rel="noreferrer">
                aqui
              </a>
              .
            </p>
          </div>
        </section>

        <section className="doacoes" id="doar">
          <div className="container">
            <h2>O que você pode doar?</h2>

            <div className="row g-3">
              <div className="col-6 col-md">
                <div className="card-doacao">Verduras</div>
              </div>
              <div className="col-6 col-md">
                <div className="card-doacao">Frutas</div>
              </div>
              <div className="col-6 col-md">
                <div className="card-doacao">Água potável</div>
              </div>
              <div className="col-6 col-md">
                <div className="card-doacao">Excedentes de estoque</div>
              </div>
              <div className="col-6 col-md">
                <div className="card-doacao">Sementes e cereais</div>
              </div>
            </div>
          </div>
        </section>

        <section className="informacoes" id="beneficios">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <h2>Quem distribui, transforma.</h2>
                <p>As ONGs são o coração da rede SIAD Tech.</p>
                <p>
                  Nossa plataforma conecta organizações sociais a oportunidades
                  reais de coleta, permitindo que alimentos cheguem com rapidez
                  às comunidades que mais precisam.
                </p>
                <p>
                  Ao se cadastrar, sua organização passa a receber notificações
                  inteligentes baseadas em localização, disponibilidade
                  e prioridade de atendimento.
                  Porque quem combate a fome precisa de tecnologia trabalhando junto.
                </p>
                <a
                  href="#"
                  className="botao-rosa"
                  onClick={(e) => {
                    e.preventDefault();
                    aoIrParaFaleConosco();
                  }}
                >
                  Fale Conosco
                </a>
              </div>

              <div className="col-md-6">
                <h2>Benefícios para sua ONG:</h2>
                <ul className="lista-beneficios">
                  <li>Alertas automáticos de novas doações.</li>
                  <li>Localização do doador registrada.</li>
                  <li>Gestão de retirada e transporte.</li>
                  <li>Histórico completo de ações.</li>
                  <li>Conexão com novos parceiros.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="logistica">
          <div className="container">
            <div className="caixa-logistica">
              <div className="row align-items-center g-4">
                <div className="col-md-6">
                  <h2>A logística que conecta solidariedade.</h2>
                  <p>
                    O módulo de transporte do SIAD Tech conecta transportadoras
                    parceiras, motoristas solidários e operações logísticas
                    para garantir que cada alimento seja coletado e entregue
                    com rapidez, segurança e eficiência.
                  </p>
                  <p>
                    Nossa tecnologia organiza rotas inteligentes, reduz tempo
                    de deslocamento e otimiza cada coleta.
                  </p>
                </div>

                <div className="col-md-6">
                  <ul className="lista-check">
                    <li>Gestão inteligente de rotas</li>
                    <li>Coletas por geolocalização</li>
                    <li>Redução de tempo operacional</li>
                    <li>Rastreamento das entregas</li>
                    <li>Logística com impacto social</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>SIAD Tech - Tecnologia social contra o desperdício.</p>
      </footer>
    </div>
  );
}

export default Home;