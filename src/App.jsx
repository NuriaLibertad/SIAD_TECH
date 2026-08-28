import { useState } from 'react'
import Home from './components/home/home'
import Login from './components/login/login'
import EsqueciSenha from './components/esqueci_senha/esqueci'
import DoacoesOngs from './components/doacoes_ongs/doacoes'
import FaleConosco from './components/fale_conosco/faleconosco'



function App() {
  // Controla qual "página" está sendo exibida no momento.
  const [pagina, setPagina] = useState('home')

  // Controla o estado do botão de "Faça Conexão"
  const [enviado, setEnviado] = useState(false);


  // Decide qual componente exibir com base no valor de "pagina".
  let conteudo

  if (pagina === 'home') {
    conteudo = (
      <Home
        enviado={enviado}
        setEnviado={setEnviado}
        aoIrParaHome={() => setPagina('home')}
        aoIrParaLogin={() => setPagina('login')}
        aoIrParaFaleConosco={() => setPagina('faleconosco')}
        aoIrParaDoacoes={() => setPagina('doacoes')}
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
  }

  return (
    <>
      {conteudo}
    </>
  )
}

export default App
