import { useState } from 'react'
import Home from './components/home/home'
import Login from './components/login/login'
import EsqueciSenha from './components/esqueci_senha/esqueci'
import DoacoesOngs from './components/doacoes_ongs/doacoes'
import FaleConosco from './components/fale_conosco/faleconosco'
import Transportes from './components/transportes/transportes'

function App() {
  const [pagina, setPagina] = useState('home')

  let conteudo

  if (pagina === 'home') {
    conteudo = (
      <Home
        aoIrParaHome={() => setPagina('home')}
        aoIrParaLogin={() => setPagina('login')}
        aoIrParaFaleConosco={() => setPagina('faleconosco')}
        aoIrParaDoacoes={() => setPagina('doacoes')}
        aoIrParaTransportes={() => setPagina('transportes')}
      />
    )
  } else if (pagina === 'login') {
    conteudo = (
      <Login
        aoVoltar={() => setPagina('home')}
        aoEsqueciSenha={() => setPagina('esqueci')}
        aoLogarComSucesso={() => setPagina('home')}
      />
    )
  } else if (pagina === 'esqueci') {
    conteudo = (
      <EsqueciSenha
        aoVoltar={() => setPagina('login')}
      />
    )
  } else if (pagina === 'doacoes') {
    conteudo = (
      <DoacoesOngs
        aoVoltar={() => setPagina('home')}
        aoIrParaLogin={() => setPagina('login')}
        aoIrParaFaleConosco={() => setPagina('faleconosco')}
      />
    )
  } else if (pagina === 'faleconosco') {
    conteudo = (
      <FaleConosco
        aoVoltar={() => setPagina('home')}
        aoIrParaLogin={() => setPagina('login')}
        aoIrParaDoacoes={() => setPagina('doacoes')}
      />
    )
  } else if (pagina === 'transportes') {
    conteudo = (
      <Transportes
        aoVoltar={() => setPagina('home')}
        aoIrParaLogin={() => setPagina('login')}
        aoIrParaDoacoes={() => setPagina('doacoes')}
        aoIrParaFaleConosco={() => setPagina('faleconosco')}
      />
    )
  }

  return conteudo
}

export default App
