import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/PortfolioPage';
import PoetryPage from './pages/PoetryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/poetry" element={<PoetryPage />} />
        {/* Catch-all: redirect unknown routes back home */}
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
