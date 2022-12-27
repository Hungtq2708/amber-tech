import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './common/footer';
import { Header } from './common/header';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
