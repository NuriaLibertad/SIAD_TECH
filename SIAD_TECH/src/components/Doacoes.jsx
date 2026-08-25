import React, { useState } from 'react'
import './Css/Doacoes.css'
import logo from '../assets/logosemfundo.png'
import { Link } from "react-router-dom";


const Doacoes = () => {
  const [mostrarOngs, setMostrarOngs] = useState(false)

  const alternarSlide = () => {
    setMostrarOngs((atual) => !atual)
  }

  return (
    <>
     <header>
        <nav>
          <a href="./index.html" className="logo">
            <img src={logo} alt="logo da SIAD Tech" />
          </a>

          <ul className="opcoes">
            <Link to="/">Home</Link>
            <Link to="/doacoes">Doações + ONGs</Link>
            <Link to="/transporte">Transporte</Link>
            <Link to="/fale-conosco">Fale Conosco</Link>
          </ul>
          <a href="./login/login.html" className="button-header">Entrar</a>
        </nav>

      </header>
      <main>
        <section className="painel">
          <div className="container">
            <div className="painel-titulo">
              <h1 id="titulo-painel">
                {mostrarOngs ? "ONGs Cadastradas" : "Doações"}
              </h1>
              <p id="subtitulo-painel">
                {mostrarOngs ? "Gerencie as organizações parceiras" : "Gerencie todas as doações"}
              </p>
            </div>

            <div className="carrossel">
              <div className={`slide ${!mostrarOngs ? "ativo" : ""}`} id="slide-doacoes">
                <div className="tabela-responsiva">
                  <table className="tabela-painel">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Doador</th>
                        <th>Alimento</th>
                        <th>ONG</th>
                        <th>Status</th>
                        <th>Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>CEAGESP - Box 14</td>
                        <td>Bananas (200kg)</td>
                        <td>ONG Mãos que Alimentam</td>
                        <td><span className="status entregue">Entregue</span></td>
                        <td>15/04/2026</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Produtor Silva & Filhos</td>
                        <td>Tomates (150kg)</td>
                        <td>Instituto Pão da Vida</td>
                        <td><span className="status transporte">Em transporte</span></td>
                        <td>15/04/2026</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>CEAGESP - Box 27</td>
                        <td>Maçãs (300kg)</td>
                        <td>Ação Comunitária SP</td>
                        <td><span className="status aguardando">Aguardando</span></td>
                        <td>14/04/2026</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Fazenda Santa Clara</td>
                        <td>Alfaces (80kg)</td>
                        <td>Casa da Esperança</td>
                        <td><span className="status entregue">Entregue</span></td>
                        <td>14/04/2026</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Distribuidor JM Foods</td>
                        <td>Cenouras (120kg)</td>
                        <td>ONG Semear</td>
                        <td><span className="status transporte">Em transporte</span></td>
                        <td>13/04/2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={`slide ${mostrarOngs ? "ativo" : ""}`} id="slide-ongs">
                <div className="tabela-responsiva">
                  <table className="tabela-painel">
                    <thead>
                      <tr>
                        <th>ONG</th>
                        <th>Cidade</th>
                        <th>Telefone</th>
                        <th>Famílias atendidas</th>
                        <th>Avaliação</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ONG Mãos que Alimentam</td>
                        <td>São Paulo - SP</td>
                        <td>(11) 3456-7890</td>
                        <td>850 famílias</td>
                        <td>★ 4.8</td>
                      </tr>
                      <tr>
                        <td>Instituto Pão da Vida</td>
                        <td>Campinas - SP</td>
                        <td>(19) 2345-6789</td>
                        <td>620 famílias</td>
                        <td>★ 4.6</td>
                      </tr>
                      <tr>
                        <td>Ação Comunitária SP</td>
                        <td>São Paulo - SP</td>
                        <td>(11) 9876-5432</td>
                        <td>1200 famílias</td>
                        <td>★ 4.9</td>
                      </tr>
                      <tr>
                        <td>Casa da Esperança</td>
                        <td>Sorocaba - SP</td>
                        <td>(15) 3210-9876</td>
                        <td>430 famílias</td>
                        <td>★ 4.5</td>
                      </tr>
                      <tr>
                        <td>ONG Semear</td>
                        <td>Guarulhos - SP</td>
                        <td>(11) 5678-1234</td>
                        <td>550 famílias</td>
                        <td>★ 4.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                type="button"
                className="seta-proxima"
                onClick={alternarSlide}
                aria-label="Ver próxima tabela"
              >
                &#8250;
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>SIAD Tech - Tecnologia social contra o desperdício.</p>
      </footer>

   </>
  )
}

export default Doacoes
