import { useState, useEffect } from 'react'
import Home from './components/home/home'
import Login from './components/login/login'
import EsqueciSenha from './components/esqueci_senha/esqueci'
import DoacoesOngs from './components/doacoes_ongs/doacoes'
import FaleConosco from './components/fale_conosco/faleconosco'
import Transportes from './components/transportes/transportes'

function App() {
  const [pagina, setPagina] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pagina])

  const ir = {
    home: () => setPagina('home'),
    login: () => setPagina('login'),
    esqueci: () => setPagina('esqueci'),
    doacoes: () => setPagina('doacoes'),
    faleconosco: () => setPagina('faleconosco'),
    transportes: () => setPagina('transportes'),
  }

  if (pagina === 'login') {
    return (
      <Login
        aoVoltar={ir.home}
        aoEsqueciSenha={ir.esqueci}
        aoLogarComSucesso={ir.home}
      />
    )
  }

  if (pagina === 'esqueci') {
    return <EsqueciSenha aoVoltar={ir.login} />
  }

  if (pagina === 'doacoes') {
    return (
      <DoacoesOngs
        aoVoltar={ir.home}
        aoIrParaLogin={ir.login}
        aoIrParaFaleConosco={ir.faleconosco}
        aoIrParaTransportes={ir.transportes}
      />
    )
  }

  if (pagina === 'faleconosco') {
    return (
      <FaleConosco
        aoVoltar={ir.home}
        aoIrParaLogin={ir.login}
        aoIrParaDoacoes={ir.doacoes}
        aoIrParaTransportes={ir.transportes}
      />
    )
  }

  if (pagina === 'transportes') {
    return (
      <Transportes
        aoVoltar={ir.home}
        aoIrParaLogin={ir.login}
        aoIrParaDoacoes={ir.doacoes}
        aoIrParaFaleConosco={ir.faleconosco}
      />
    )
  }

  return (
    <Home
      aoIrParaHome={ir.home}
      aoIrParaLogin={ir.login}
      aoIrParaFaleConosco={ir.faleconosco}
      aoIrParaDoacoes={ir.doacoes}
      aoIrParaTransportes={ir.transportes}
    />
  )
}

export default App