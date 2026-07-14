import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConsultaProvider } from './context/ConsultaContext';
import ConsultaDetail from './pages/ConsultaDetail';
import ConsultaList from './pages/ConsultaList';
import ContactoForm from './pages/ContactoForm';

export default function ContactoApp() {
  return (
    <ConsultaProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ContactoForm />} />
          <Route path="/consultas" element={<ConsultaList />} />
          <Route path="/consultas/:id" element={<ConsultaDetail />} />
        </Routes>
      </HashRouter>
    </ConsultaProvider>
  );
}
