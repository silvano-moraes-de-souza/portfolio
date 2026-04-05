// Propriedade Intelectual: Silvano Moraes de Souza
import { useState, useEffect } from 'react';
import { Sun, Moon, LineChart, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LIGHT_GRADIENT = '#0e7490';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { to: '/', label: 'PERFIL' },
    { to: '/trajetoria', label: 'TRAJETORIA' },
    { to: '/projetos', label: 'PROJETOS' },
  ];

  const linkClass = ({ isActive }) => `block font-headline font-bold tracking-tight text-xl py-3 px-6 rounded-lg transition-all duration-300 ${
    isActive 
      ? (isDark ? 'text-cyan-400 bg-cyan-400/10' : 'text-white bg-white/20') 
      : (isDark ? 'text-white/70 hover:text-cyan-400 hover:bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/10')
  }`;

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl h-20 px-8 flex justify-between items-center transition-all duration-500 border-b border-white/10"
      style={isDark
        ? { background: 'rgba(10, 10, 12, 0.8)', boxShadow: '0 4px 30px rgba(0,0,0,0.5)' }
        : { background: LIGHT_GRADIENT, boxShadow: '0 4px 30px rgba(0,0,0,0.25)' }
      }
    >
      
      {/* Esquerda: Nome + Menu Hamburger */}
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen 
            ? <X size={28} className={isDark ? 'text-cyan-400' : 'text-white'} />
            : <Menu size={28} className={isDark ? 'text-cyan-400' : 'text-white'} />
          }
        </button>
        <NavLink to="/" className={`text-xl md:text-3xl font-bold tracking-tighter font-headline uppercase truncate max-w-[200px] md:max-w-none transition-colors duration-300 ${isDark ? 'text-cyan-400' : 'text-white'}`}>
          Silvano<span className="hidden md:inline"> Moraes de Souza</span>
        </NavLink>
      </div>

      {/* Centro: Links (Desktop) */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div 
            className={`absolute inset-0 ${isDark ? 'bg-[rgba(10,10,12,0.95)]' : 'bg-[rgba(14,116,144,0.95)]'} backdrop-blur-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 p-6 pt-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Direita: Switch + Logo */}
        <div className="flex items-center gap-10">
          
          {/* Toggle Switch */}
          <button 
            onClick={() => setIsDark(!isDark)} 
            className={`relative w-11 h-5.5 rounded-full transition-colors duration-300 flex items-center px-1 shadow-inner focus:outline-none ${isDark ? 'bg-surface-container-highest border border-outline-variant/30' : 'bg-white/20 border border-white/30'}`}
            title="Alternar Tema"
          >
          <span className="absolute left-2 text-yellow-400 pointer-events-none"><Sun size={14} /></span>
          <span className="absolute right-2 text-white pointer-events-none"><Moon size={14} /></span>
          
          <div className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 z-10 ${isDark ? 'translate-x-8 bg-primary glow-primary' : 'translate-x-0 bg-white'}`}>
            </div>
          </button>
          
          <div className="flex items-center gap-3 border-l-2 border-white/20 pl-8 group cursor-pointer">
            <LineChart className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={38} />
            <div className={`font-mono text-sm font-bold leading-tight uppercase tracking-widest hidden sm:block transition-colors duration-300 ${isDark ? 'text-cyan-400' : 'text-white'}`}>
              Análise de<br/>Dados
            </div>
          </div>
        </div>
    </nav>
  );
}
