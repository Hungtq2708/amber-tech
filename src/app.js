import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './common/footer';
import { Header } from './common/header';
import { ComingSoon } from './components/coming-soon';
import { HomePage } from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<ComingSoon />} />
        <Route path="/service" element={<ComingSoon />} />
        <Route path="/project" element={<ComingSoon />} />
        <Route path="/blog" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
