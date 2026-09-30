import logo from "../../assets/images/logosemfundo.png"
import computador from "../../assets/images/computador.png"
import "./style.css"

function Home({
  aoIrParaLogin,
  aoIrParaFaleConosco,
  aoIrParaHome,
  aoIrParaDoacoes,
  aoIrParaTransportes
}) {
  return (
    <div className="pagina-home">

      <header className="cabecalho">
        <nav>
          <button
            className="logo"
            onClick={aoIrParaHome}
            type="button"
          >
            <img
              src={logo}
              alt="Logo SIAD Tech"
            />
          </button>

          <ul className="opcoes">
            <li>
              <button
                onClick={aoIrParaLogin}
                type="button"
              >
                Entrar
              </button>
            </li>

            <li>
              <button
                onClick={aoIrParaFaleConosco}
                type="button"
              >
                Fale Conosco
              </button>
            </li>

            <li>
              <button
                onClick={aoIrParaDoacoes}
                type="button"
              >
                Doações + ONGs
              </button>
            </li>

            <li>
              <button
                onClick={aoIrParaTransportes}
                type="button"
              >
                Transportes
              </button>
            </li>
          </ul>

          <button
            className="button-header"
            onClick={aoIrParaLogin}
            type="button"
          >
            Entrar
          </button>
        </nav>
      </header>

      <main>

        <section className="hero" id="inicio">
          <div className="hero-container">

            <div className="hero-texto">
              <h1>
                Tecnologia que conecta alimentos a quem realmente precisa.
              </h1>

              <p>
                Uma plataforma que aproxima doadores e ONGs para transformar
                excedentes em esperança.
              </p>

              <button
                className="botao-rosa"
                onClick={aoIrParaDoacoes}
                type="button"
              >
                Faça conexão
              </button>
            </div>

            <div className="hero-imagem">
              <img
                src={computador}
                alt="Imagem do computador"
                className="img-computador"
              />
            </div>

          </div>
        </section>

        <section className="texto-centro">
          <div className="conteudo">
            <h2>
              Transforme excedentes em esperança.
            </h2>

            <p>
              Alimentos que poderiam virar descarte passam a abastecer quem precisa.
            </p>

            <p>
              Assista ao nosso vídeo institucional clicando{" "}
              <a
                href="https://www.youtube.com/watch?v=dPvUQBWS-7M"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>.
            </p>
          </div>
        </section>

        <section className="doacoes" id="doar">
          <div className="conteudo">

            <h2>
              O que você pode doar?
            </h2>

            <div className="cards-doacao">

              <div className="card-doacao">
                Verduras
              </div>

              <div className="card-doacao">
                Frutas
              </div>

              <div className="card-doacao">
                Água potável
              </div>

              <div className="card-doacao">
                Excedentes de estoque
              </div>

              <div className="card-doacao">
                Sementes e cereais
              </div>

            </div>

          </div>
        </section>

        <section className="informacoes" id="beneficios">
          <div className="conteudo">

            <div className="informacoes-grid">

              <div>

                <h2>
                  Quem distribui, transforma.
                </h2>

                <p>
                  As ONGs são o coração da rede SIAD Tech.
                </p>

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

                <button
                  className="botao-rosa"
                  onClick={aoIrParaFaleConosco}
                  type="button"
                >
                  Fale Conosco
                </button>

              </div>

              <div>

                <h2>
                  Benefícios para sua ONG:
                </h2>

                <ul className="lista-beneficios">

                  <li>
                    Alertas automáticos de novas doações.
                  </li>

                  <li>
                    Localização do doador registrada.
                  </li>

                  <li>
                    Gestão de retirada e transporte.
                  </li>

                  <li>
                    Histórico completo de ações.
                  </li>

                  <li>
                    Conexão com novos parceiros.
                  </li>

                </ul>

              </div>

            </div>

          </div>
        </section>

        <section className="logistica">
          <div className="conteudo">

            <div className="caixa-logistica">

              <div className="logistica-grid">

                <div>

                  <h2>
                    A logística que conecta solidariedade.
                  </h2>

                  <p>
                    O módulo de transporte do SIAD Tech conecta transportadoras
                    parceiras, motoristas solidários e operações logísticas para
                    garantir que cada alimento seja coletado e entregue com
                    rapidez, segurança e eficiência.
                  </p>

                  <p>
                    Nossa tecnologia organiza rotas inteligentes,
                    reduz tempo de deslocamento e otimiza cada coleta.
                  </p>

                  <button
                    className="botao-rosa"
                    onClick={aoIrParaTransportes}
                    type="button"
                  >
                    Conheça os Transportes
                  </button>

                </div>

                <div>

                  <ul className="lista-check">

                    <li>
                      Gestão inteligente de rotas
                    </li>

                    <li>
                      Coletas por geolocalização
                    </li>

                    <li>
                      Redução de tempo operacional
                    </li>

                    <li>
                      Rastreamento das entregas
                    </li>

                    <li>
                      Logística com impacto social
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <footer>
        <p>
          SIAD Tech - Tecnologia social contra o desperdício.
        </p>
      </footer>

    </div>
  )
}

export default Home
