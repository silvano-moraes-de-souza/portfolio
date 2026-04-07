import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SobreMim from './components/SobreMim';
import Trajetoria from './components/Trajetoria';
import Projetos from './components/Projetos';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-mesh-light dark:bg-mesh-dark transition-all duration-300 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* PT-20 compensa o navbar fixo */}
        <Routes>
          <Route path="/" element={<SobreMim />} />
          <Route path="/trajetoria" element={<Trajetoria />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projeto/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
