import { useState } from 'react'

function Transportes({
aoVoltar,
aoIrParaLogin,
aoIrParaDoacoes,
aoIrParaFaleConosco
}) {
const etapas = [
{
nome: "CEAGESP",
icone: "1",
resumo: "Coleta",
texto: "Os alimentos que perderam valor comercial, mas ainda podem ser consumidos, são separados para doação."
},
{
nome: "Triagem",
icone: "2",
resumo: "Qualidade",
texto: "A equipe verifica o estado dos alimentos e organiza tudo por tipo, urgência e destino."
},
{
nome: "Transporte",
icone: "3",
resumo: "Rota rápida",
texto: "O transporte leva os alimentos com agilidade para evitar perdas durante o caminho."
},
{
nome: "ONG",
icone: "4",
resumo: "Recebimento",
texto: "A ONG cadastrada recebe os alimentos e confirma a chegada no sistema."
},
{
nome: "Famílias",
icone: "5",
resumo: "Distribuição",
texto: "Os alimentos chegam até famílias em situação de vulnerabilidade social."
}
]

const rotasIniciais = [
{
origem: "CEAGESP",
destino: "ONG Vida",
alimento: "Verduras",
status: "Coleta",
etapa: 0
},
{
origem: "Mercado Central",
destino: "Famílias",
alimento: "Frutas",
status: "Urgente",
etapa: 2
},
{
origem: "Supermercado Bom Preço",
destino: "ONG Esperança",
alimento: "Alimentos secos",
status: "Entregue",
etapa: 4
}
]

const [etapaAtual, setEtapaAtual] = useState(0)
const [rotas, setRotas] = useState(rotasIniciais)
const [mostrarFormulario, setMostrarFormulario] = useState(false)

const [novaRota, setNovaRota] = useState({
origem: "",
destino: "",
alimento: "",
status: "Coleta"
})

function classeStatus(status) {
if (status === "Urgente") return "status status-urgente"
if (status === "Entregue") return "status status-entregue"
return "status status-coleta"
}

function cadastrarRota(evento) {
evento.preventDefault()

```
if (!novaRota.origem || !novaRota.destino || !novaRota.alimento) {
  alert("Preencha origem, destino e alimento.")
  return
}

const rota = {
  ...novaRota,
  etapa:
    novaRota.status === "Entregue"
      ? 4
      : novaRota.status === "Urgente"
        ? 2
        : 0
}

setRotas([...rotas, rota])

setNovaRota({
  origem: "",
  destino: "",
  alimento: "",
  status: "Coleta"
})

setMostrarFormulario(false)
```

}

return (
<> <header className="cabecalho"> <nav className="navbar navbar-expand-lg"> <div className="container">

```
        <button
          className="navbar-brand logo-area border-0 bg-transparent"
          onClick={aoVoltar}
        >
          <img
            src="assets/logo.svg"
            className="logo-img"
            alt="Logo SIAD Tech"
          />
          <span>
            SIAD <strong>Tech</strong>
          </span>
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <button
                className="nav-link border-0 bg-transparent"
                onClick={aoVoltar}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link border-0 bg-transparent"
                onClick={aoIrParaDoacoes}
              >
                Doações + ONGs
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link ativo border-0 bg-transparent"
              >
                Transportes
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link link-contato border-0 bg-transparent"
                onClick={aoIrParaFaleConosco}
              >
                Fale Conosco
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link border-0 bg-transparent"
                onClick={aoIrParaLogin}
              >
                Login
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>

    <section className="hero-transportes">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <span className="subtitulo">
              Logística solidária
            </span>

            <h1>TRANSPORTES</h1>

            <p>
              O meio de transporte é fundamental para garantir um
              processo eficiente desde a coleta até a distribuição
              dos alimentos. Inspirada em iniciativas como a
              GoodTruck Brasil, esta tela ajuda a organizar rotas,
              destinos e entregas para ONGs e famílias em
              vulnerabilidade social.
            </p>

            <button
              className="botao-rosa"
              onClick={() =>
                setMostrarFormulario(!mostrarFormulario)
              }
            >
              Nova rota
            </button>
          </div>

          <div className="col-md-6">
            <div className="cartao-mapa">
              <div className="mapa-falso">
                <div className="linha-rota"></div>
                <div className="ponto ponto-origem"></div>
                <div className="ponto ponto-meio"></div>
                <div className="ponto ponto-destino"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {mostrarFormulario && (
      <section className="secao">
        <div className="container">

          <form
            className="formulario-rota"
            onSubmit={cadastrarRota}
          >
            <h2 className="titulo-secao">
              Cadastrar nova rota
            </h2>

            <div className="row g-3">

              <div className="col-md-3">
                <label className="form-label">
                  Origem
                </label>

                <input
                  className="form-control"
                  value={novaRota.origem}
                  onChange={(e) =>
                    setNovaRota({
                      ...novaRota,
                      origem: e.target.value
                    })
                  }
                  placeholder="Ex: CEAGESP"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">
                  Destino
                </label>

                <input
                  className="form-control"
                  value={novaRota.destino}
                  onChange={(e) =>
                    setNovaRota({
                      ...novaRota,
                      destino: e.target.value
                    })
                  }
                  placeholder="Ex: ONG Vida"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">
                  Alimento
                </label>

                <input
                  className="form-control"
                  value={novaRota.alimento}
                  onChange={(e) =>
                    setNovaRota({
                      ...novaRota,
                      alimento: e.target.value
                    })
                  }
                  placeholder="Ex: Frutas"
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">
                  Status
                </label>

                <select
                  className="form-select"
                  value={novaRota.status}
                  onChange={(e) =>
                    setNovaRota({
                      ...novaRota,
                      status: e.target.value
                    })
                  }
                >
                  <option>Coleta</option>
                  <option>Urgente</option>
                  <option>Entregue</option>
                </select>
              </div>

            </div>

            <button
              className="botao-rosa mt-4"
              type="submit"
            >
              Salvar rota
            </button>

          </form>
        </div>
      </section>
    )}

    <section className="secao">
      <div className="container">

        <h2 className="titulo-secao">
          Como a rota funciona?
        </h2>

        <div className="fluxo">
          <div className="row g-3">

            {etapas.map((etapa, indice) => (
              <div
                className="col-6 col-md"
                key={etapa.nome}
              >
                <div
                  className={
                    indice === etapaAtual
                      ? "etapa ativa"
                      : "etapa"
                  }
                  onClick={() => setEtapaAtual(indice)}
                >
                  <span>{etapa.icone}</span>
                  <h3>{etapa.nome}</h3>
                  <p>{etapa.resumo}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

    <section className="secao pt-0">
      <div className="container">

        <div className="row g-4">

          <div className="col-md-5">
            <div className="cartao-explicacao">

              <h3>
                {etapas[etapaAtual].nome}
              </h3>

              <p>
                {etapas[etapaAtual].texto}
              </p>

              <p>
                Essa explicação muda quando você clica
                em cada etapa do fluxo, deixando a tela
                mais dinâmica e fácil de apresentar.
              </p>

            </div>
          </div>

          <div className="col-md-7">
            <div className="tabela-rotas">

              <table className="table table-hover">

                <thead>
                  <tr>
                    <th>Origem</th>
                    <th>Destino</th>
                    <th>Alimento</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {rotas.map((rota, indice) => (
                    <tr
                      className="linha-clicavel"
                      key={indice}
                      onClick={() =>
                        setEtapaAtual(rota.etapa)
                      }
                    >
                      <td>{rota.origem}</td>
                      <td>{rota.destino}</td>
                      <td>{rota.alimento}</td>

                      <td>
                        <span
                          className={classeStatus(
                            rota.status
                          )}
                        >
                          {rota.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>

        </div>

      </div>
    </section>

    <section className="secao" id="contato">
      <div className="container">

        <div className="painel-interacoes">

          <h2>Interações da tela</h2>

          <ul>
            <li>
              O botão Nova rota abre um pequeno cadastro
              de transporte.
            </li>

            <li>
              A tabela funciona como uma planilha simples
              de acompanhamento.
            </li>

            <li>
              Ao clicar em uma rota, a etapa do transporte
              fica destacada.
            </li>

            <li>
              Ao clicar no fluxo, a explicação da etapa
              aparece ao lado.
            </li>
          </ul>

        </div>

      </div>
    </section>

  </main>

  <footer>
    <p>
      SIAD Tech - Transporte solidário contra o desperdício
      de alimentos.
    </p>
  </footer>
</>
```

)
}

export default Transportes
