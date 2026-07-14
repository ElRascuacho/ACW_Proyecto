import { HashRouter, Route, Routes } from 'react-router-dom';
import { TicketProvider } from './context/TicketContext';
import NewTicket from './pages/NewTicket';
import TicketDetail from './pages/TicketDetail';
import TicketList from './pages/TicketList';

export default function SoporteApp() {
  return (
    <TicketProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/tickets/:id" element={<TicketDetail />} />
          <Route path="/nuevo" element={<NewTicket />} />
        </Routes>
      </HashRouter>
    </TicketProvider>
  );
}
