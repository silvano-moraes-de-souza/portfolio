import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Rocket, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { bannerUrl } from '../data/projects';

const GithubIcon = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>;

function Section({ title, highlight, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-slate-900 dark:text-white uppercase leading-tight">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {children}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projeto = portfolioData.projetos.find(p => p.slug === slug);

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
      <section className="relative pt-12 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
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

        <div className="rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-primary/30 shadow-2xl mb-12">
          <img src={bannerUrl(projeto)} alt={projeto.titulo} className="w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/10 dark:bg-primary/5 text-cyan-700 dark:text-primary text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-slate-900 dark:text-white leading-tight">
              {projeto.titulo}
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-body">
              {projeto.descricao}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={projeto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-slate-900 font-bold font-mono tracking-widest uppercase rounded-2xl hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
              >
                <GithubIcon size={20} /> Código no GitHub
              </a>
              {projeto.demo && (
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-cyan-700 dark:text-primary font-bold font-mono tracking-widest uppercase rounded-2xl hover:bg-primary/10 transition-all"
                >
                  Ver online <Rocket size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {projeto.metricas.map(m => (
              <div key={m.label} className="p-6 bg-white dark:bg-surface-container-low rounded-2xl border border-slate-200 dark:border-primary/10 shadow-lg">
                <div className="text-3xl md:text-4xl font-headline font-bold text-cyan-600 dark:text-primary">{m.valor}</div>
                <div className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">{m.label}</div>
              </div>
            ))}
            {projeto.notaMetricas && (
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{projeto.notaMetricas}</p>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto py-16 border-t border-slate-200 dark:border-primary/10 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Section title="O" highlight="problema">
            <p className="text-xl text-slate-700 dark:text-slate-300 font-body leading-relaxed">{projeto.problema}</p>
          </Section>
          <Section title="A" highlight="solução">
            <p className="text-xl text-slate-700 dark:text-slate-300 font-body leading-relaxed">{projeto.solucao}</p>
          </Section>
        </div>

        <Section title="Destaques" highlight="técnicos">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projeto.destaques.map(d => (
              <li key={d} className="flex items-start gap-4 p-6 bg-white dark:bg-surface-container-low rounded-2xl border border-slate-200 dark:border-primary/10">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={24} />
                <span className="text-lg text-slate-700 dark:text-slate-300">{d}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Decisões de" highlight="engenharia">
          <div className="space-y-4">
            {projeto.decisoes.map(d => (
              <div key={d.decisao} className="flex items-start gap-4 p-6 bg-white dark:bg-surface-container-low rounded-2xl border-l-4 border-cyan-500">
                <Scale className="text-cyan-600 dark:text-primary shrink-0 mt-1" size={24} />
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{d.decisao}</div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">{d.motivo}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Limitações" highlight="conhecidas">
          <ul className="space-y-3">
            {projeto.limitacoes.map(l => (
              <li key={l} className="flex items-start gap-4 text-lg text-slate-700 dark:text-slate-300">
                <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={20} />
                {l}
              </li>
            ))}
          </ul>
        </Section>
      </section>
    </div>
  );
}
