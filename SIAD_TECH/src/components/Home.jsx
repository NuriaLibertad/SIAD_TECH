import React from 'react'
import "./Css/Home.css"
import logo from '../assets/logosemfundo.png'
import computador from '../assets/computador.png'
import { Link } from "react-router-dom";



const Section = () => {
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
        <section className="hero" id="inicio">
          <div className="container">
            <div className="linha">
              <div className="hero-texto">
                <h1>Tecnologia que conecta alimentos a quem realmente precisa.</h1>
                <p>
                  Uma plataforma que aproxima doadores e ONGs para transformar
                  excedentes em esperança.
                </p>
                <a href="#" id="btn-conexao" className="botao-rosa">Faça conexão</a>
              </div>

              <div className="hero-imagem">
                <img src={computador} alt="Imagem do computador" className="img-computador" />
              </div>
            </div>
          </div>
        </section>

        <section className="doacoes">
          <div className="container">
            <h2>O que você pode doar?</h2>
            <div className="doacoes-grid">
              <div className="card-doacao">Verduras</div>
              <div className="card-doacao">Frutas</div>
              <div className="card-doacao">Água potável</div>
              <div className="card-doacao">Excedentes de estoque</div>
              <div className="card-doacao">Sementes e cereais</div>
            </div>
          </div>
        </section>

        <section className="informacoes">
          <div className="container">
            <div className="informacoes-grid">
              <div className="informacoes-texto">
                <h2>Quem distribui, transforma.</h2>
                <p>As ONGs são o coração da rede SIAD Tech.</p>
                <p>
                  Nossa plataforma conecta organizações sociais a oportunidades reais
                  de coleta, permitindo que alimentos cheguem com rapidez às
                  comunidades que mais precisam.
                </p>
                <p>
                  Ao se cadastrar, sua organização passa a receber notificações
                  inteligentes baseadas em localização, disponibilidade e prioridade
                  de atendimento. Porque quem combate a fome precisa de tecnologia
                  trabalhando junto.
                </p>
                <a href="#" className="botao-rosa">Fale Conosco</a>
              </div>

              <div className="informacoes-beneficios">
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
      </main>


    </>
  )
}

export default Section
