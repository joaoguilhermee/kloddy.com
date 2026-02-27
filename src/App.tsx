import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { KidsModeProvider } from './context/KidsModeContext';

function App() {
  return (
    <KidsModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </KidsModeProvider>
  );
}

export default App;
