import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import NavBar from './components/NavBar/NavBar.tsx'
import MarcarConsulta from './components/Marcar Consulta/MarcarConsulta.tsx'
import InformacoesImportantes from './components/Informações Importantes/InformacoesImportantes.tsx'
import Footer from './components/Footer/Footer.tsx'
import Facilidades from './components/Facilidades/Facilidades.tsx'
import CorpoClinico from './components/Corpo-Clinico/CorpoClinico.tsx'
import Especialidades from './components/Especialidades/Especialidades.tsx'
import SobreNos from './components/SobreNos/SobreNos.tsx'
import InfoFlore from './components/Info-Flore/InfoFlore.tsx'

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
        <Route path="/corpo-clinico" element={<CorpoClinico />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/consulta" element={<MarcarConsulta />} />
      </Routes>
      <InfoFlore />
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
