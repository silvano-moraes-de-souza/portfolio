import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Rocket, Database, Layers, CheckCircle2, Terminal, Code, Zap } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const GithubIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>;
const LinkedinIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = portfolioData.projetos.find(p => p.id === parseInt(id));

  if (!projeto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-6">
        <h2 className="text-4xl font-headline font-bold text-slate-900 dark:text-white">Projeto não encontrado</h2>
        <p className="text-slate-600 dark:text-slate-400 text-xl">O projeto que você está procurando não existe ou foi removido.</p>
        <Link to="/projetos" className="px-8 py-3 bg-primary text-slate-900 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-all">
          Voltar para Projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-40">
           <div className="w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all mb-12 font-mono font-bold uppercase tracking-widest text-sm"
        >
          <div className="p-2 rounded-full border border-slate-200 dark:border-primary/20 group-hover:border-primary transition-all">
            <ChevronLeft size={18} />
          </div>
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 dark:bg-primary/5 text-primary text-[10px] font-mono font-bold uppercase tracking-widest rounded-full border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-slate-900 dark:text-white leading-tight uppercase">
                {projeto.titulo}
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-body">
              {projeto.descricao}
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href={projeto.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-slate-900 font-bold font-mono tracking-widest uppercase rounded-2xl hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
              >
                Ver Projeto Online <Rocket size={20} />
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/silvano-moraes-de-souza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border-2 border-slate-200 dark:border-primary/20 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/silvanomsouza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border-2 border-slate-200 dark:border-primary/20 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-all"
                  title="Instagram"
                >
                  <InstagramIcon size={24} />
                </a>
                <a 
                  href="https://github.com/silvanomoraes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border-2 border-slate-200 dark:border-primary/20 text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary transition-all"
                  title="GitHub"
                >
                  <GithubIcon size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-primary/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt={projeto.titulo}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-20 border-t border-slate-200 dark:border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-white dark:bg-surface-container-low rounded-3xl border border-slate-100 dark:border-primary/10 space-y-4">
            <Rocket className="text-primary" size={32} />
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-900 dark:text-white">Fase</h3>
            <p className="text-slate-600 dark:text-slate-400 font-body">Produção</p>
          </div>
          <div className="p-8 bg-white dark:bg-surface-container-low rounded-3xl border border-slate-100 dark:border-primary/10 space-y-4">
            <CheckCircle2 className="text-primary" size={32} />
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-900 dark:text-white">Objetivo</h3>
            <p className="text-slate-600 dark:text-slate-400 font-body">Escalabilidade & Performance.</p>
          </div>
          <div className="p-8 bg-white dark:bg-surface-container-low rounded-3xl border border-slate-100 dark:border-primary/10 space-y-4">
            <Database className="text-primary" size={32} />
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-900 dark:text-white">Backend</h3>
            <p className="text-slate-600 dark:text-slate-400 font-body">{projeto.tecnologias[1] || 'Python'}</p>
          </div>
          <div className="p-8 bg-white dark:bg-surface-container-low rounded-3xl border border-slate-100 dark:border-primary/10 space-y-4">
            <Terminal className="text-primary" size={32} />
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-900 dark:text-white">Arquitetura</h3>
            <p className="text-slate-600 dark:text-slate-400 font-body">Microservices / BI</p>
          </div>
        </div>

        <div className="mt-20 space-y-12">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-slate-900 dark:text-white uppercase leading-tight">
              Visão Geral do <span className="text-primary">Desenvolvimento</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-700 dark:text-slate-300 font-body leading-relaxed">
              <p>
                Este projeto foi concebido para resolver desafios específicos de {projeto.titulo.toLowerCase()}. 
                A arquitetura foi pensada para ser modular e resiliente, permitindo que novas funcionalidades fossem implementadas com o mínimo de atrito possível.
              </p>
              <p>
                Utilizando {projeto.tecnologias.join(', ')}, conseguimos alcançar uma performance superior em comparação com soluções anteriores. 
                O foco principal foi em garantir que a experiência do usuário final fosse fluida, enquanto o backend geria fluxos de dados complexos em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
