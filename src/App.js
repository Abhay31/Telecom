import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';
import EnquiryPage from './pages/EnquiryPage';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;