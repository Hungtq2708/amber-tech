import { Footer } from './components/footer';
import { Header } from './components/header';
import { HomePage } from './pages/home';

function App() {
  return (
    <div className="container mx-auto">
      <Header />

      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
