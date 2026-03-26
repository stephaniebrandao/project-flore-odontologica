import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './components/NavBar/NavBar.tsx'
import MarcarConsulta from './components/Marcar Consulta/MarcarConsulta.tsx'
import InformacoesImportantes from './components/Informações Importantes/InformacoesImportantes.tsx'
import SobreNos from './components/Sobre-Nos/SobreNos.tsx'
import Footer from './components/Footer/Footer.tsx'
import Facilidades from './components/Facilidades/Facilidades.tsx'
import CorpoClinico from './components/Corpo-Clinico/CorpoClinico.tsx'
import Especialidades from './components/Especialidades/Especialidades.tsx'
import Contatos from './components/Contatos/Contatos.tsx'
import PerguntasFrequentes from './components/FAQ/PerguntasFrequentes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/consulta" element={<MarcarConsulta />}/>
        <Route path="/informacoes" element={<InformacoesImportantes />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/facilidades" element={<Facilidades />} />
        <Route path="/corpo-clinico">
          <Route index element={<CorpoClinico />} />
          <Route path='diretora-clinica' element={<h1>Diretora Clínica</h1>}/>
          <Route path='especialistas'  element={<h1>Especialistas</h1>}/>
        </Route>
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/perguntas" element={<PerguntasFrequentes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
