import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Doacoes from './components/Doacoes.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacoes" element={<Doacoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
