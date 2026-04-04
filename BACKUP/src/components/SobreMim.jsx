import { Database, Code2, PenTool, GitBranch, Terminal } from 'lucide-react';

export default function SobreMim() {
  return (
    <section className="pt-24 pb-6 px-4 md:px-6 w-full max-w-[1440px] mx-auto animate-fade-in" id="sobre">
      
      {/* Top Section: Hero (Left) + 2 Cards (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start mb-12">
        
        {/* LADO ESQUERDO: Hero, Foto e Bio */}
        <div className="xl:col-span-8 space-y-10">
          
          {/* O título foi movido para cima do texto da bio */}

          <div className="flex flex-col md:flex-row gap-10 items-start">
            
            {/* Foto Avatar Arte com Card escuro, efeito grayscale→cor e overlay de status */}
            <div className="relative group w-full md:w-[360px] lg:w-[460px] shrink-0">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition duration-1000"></div>
              <div className="relative bg-surface-container-low p-2 rounded-2xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4)' }}>
                <img 
                  alt="Silvano Moraes - Soluções" 
                  className="w-full aspect-[4/5] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://i.ibb.co/MkLhTT6L/SILVANO.png"
                />
              </div>
              {/* Card de Status flutuante (corno inferior direito) */}
              <div className="absolute bottom-6 -right-4 bg-surface-container-highest/90 backdrop-blur-md p-4 rounded-lg border border-outline-variant/20 font-mono text-[10px] text-tertiary-dim tracking-wider uppercase leading-relaxed">
                Status: Disponível<br/>
                Local: São Paulo_BR<br/>
                Foco: Dados & UX
              </div>
            </div>

            {/* Biografia */}
            <div className="space-y-8 flex-1 pt-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tighter leading-[1.1] dark:text-white text-slate-900 mb-20">
                Desenvolvedor de <span className="text-cyan-600 dark:text-primary">Soluções</span>
              </h1>
              <p className="text-slate-700 dark:text-slate-300 text-2xl lg:text-3xl leading-relaxed font-body">
                Projeto e desenvolvo o ciclo completo da informação: desde a prototipagem de interfaces intuitivas no <strong className="text-slate-900 dark:text-white">Figma</strong>, passando pela automação de fluxos complexos com <strong className="text-slate-900 dark:text-white">n8n e Python</strong>, até a entrega de dashboards estratégicos em <strong className="text-slate-900 dark:text-white">Power BI e Looker Studio</strong>.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-2xl lg:text-3xl leading-relaxed font-body">
                Unindo o rigor analítico à estética funcional com <strong className="text-slate-900 dark:text-white">React e Tailwind</strong>, construo ferramentas que otimizam o trabalho humano e geram resultados mensuráveis.
              </p>

              {/* KPIs - 4 blocos na mesma linha */}
              <div className="flex flex-nowrap items-center gap-6 pt-8 border-t border-slate-200 dark:border-white/10 mt-8 overflow-x-auto">
                <div className="flex flex-col min-w-[60px]">
                  <span className="text-3xl md:text-4xl font-headline font-bold text-cyan-600 dark:text-primary">8+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">Anos XP</span>
                </div>
                <div className="w-px h-12 bg-slate-300 dark:bg-white/10 flex-shrink-0 self-center"></div>
                <div className="flex flex-col min-w-[80px]">
                  <span className="text-3xl md:text-4xl font-headline font-bold text-emerald-600 dark:text-tertiary">30+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">Projetos</span>
                </div>
                <div className="w-px h-12 bg-slate-300 dark:bg-white/10 flex-shrink-0 self-center"></div>
                <div className="flex flex-col min-w-[60px]">
                  <span className="text-3xl md:text-4xl font-headline font-bold text-pink-600 dark:text-secondary">360º</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">Visão</span>
                </div>
                <div className="w-px h-12 bg-slate-300 dark:bg-white/10 flex-shrink-0 self-center"></div>
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-3xl md:text-4xl font-headline font-bold text-yellow-600 dark:text-yellow-400">R$235K+</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">Economia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Card 1 e Card 2 empilhados */}
        <div className="xl:col-span-4 flex flex-col gap-8 h-full">
          
          {/* Card 1: Ciência de Dados & BI */}
          <div className="flex-1 bg-white dark:bg-surface-container-low rounded-3xl p-8 lg:p-10 border-l-[8px] border-cyan-500 ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-10 right-10 opacity-25 dark:opacity-30 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Database size={140} className="text-slate-900 dark:text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-cyan-700 dark:text-primary relative z-10">
              Ciência de Dados & BI
            </h3>
            
            {/* Uma linha a mais de espaço antes das barras */}
            <div className="space-y-6 relative z-10 pl-2 mt-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex-1 space-y-3">
                  <div className="text-lg md:text-xl font-bold font-mono text-slate-800 dark:text-white">Power BI & Looker Studio</div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-cyan-500 glow-primary rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="text-lg font-bold font-mono text-slate-800 dark:text-white pt-6">95%</div>
              </div>

              <div className="flex items-center justify-between space-x-4">
                <div className="flex-1 space-y-3">
                  <div className="text-lg md:text-xl font-bold font-mono text-slate-800 dark:text-white">SQL (PostgreSQL / BigQuery)</div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-cyan-500 glow-primary rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="text-lg font-bold font-mono text-slate-800 dark:text-white pt-6">90%</div>
              </div>

              <div className="flex items-center justify-between space-x-4">
                <div className="flex-1 space-y-3">
                  <div className="text-lg md:text-xl font-bold font-mono text-slate-800 dark:text-white">Python (Pandas/NumPy)</div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-cyan-500 glow-primary rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="text-lg font-bold font-mono text-slate-800 dark:text-white pt-6">85%</div>
              </div>
            </div>
          </div>

          {/* Card 2: Desenvolvimento & Automação — Grid 2x2 com círculos como no PowerPoint */}
          <div className="flex-1 bg-white dark:bg-surface-container-low rounded-3xl p-8 lg:p-10 border-l-[8px] border-emerald-500 ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group flex flex-col">
            <div className="absolute top-10 right-10 opacity-25 dark:opacity-30 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Code2 size={140} className="text-slate-900 dark:text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-14 text-emerald-700 dark:text-tertiary relative z-10">
              Desenvolvimento & Automação
            </h3>
            
            {/* Grid 2x2: nome à esquerda, círculo à direita */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 relative z-10 content-start">
              
              {/* React */}
              <div className="flex items-center justify-between bg-slate-900/[0.06] dark:bg-black/30 rounded-2xl px-4 py-3 border border-slate-200/60 dark:border-white/10">
                <span className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">React</span>
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-slate-200 dark:text-white/10" />
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-emerald-500" strokeDasharray="163" strokeDashoffset={163 - (163 * 90) / 100} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold text-slate-800 dark:text-white">90%</span>
                </div>
              </div>

              {/* Python */}
              <div className="flex items-center justify-between bg-slate-900/[0.06] dark:bg-black/30 rounded-2xl px-4 py-3 border border-slate-200/60 dark:border-white/10">
                <span className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">Python</span>
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-slate-200 dark:text-white/10" />
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-emerald-500" strokeDasharray="163" strokeDashoffset={163 - (163 * 85) / 100} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold text-slate-800 dark:text-white">85%</span>
                </div>
              </div>

              {/* n8n */}
              <div className="flex items-center justify-between bg-slate-900/[0.06] dark:bg-black/30 rounded-2xl px-4 py-3 border border-slate-200/60 dark:border-white/10">
                <span className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">n8n</span>
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-slate-200 dark:text-white/10" />
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-emerald-500" strokeDasharray="163" strokeDashoffset={163 - (163 * 95) / 100} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold text-slate-800 dark:text-white">95%</span>
                </div>
              </div>

              {/* Supabase */}
              <div className="flex items-center justify-between bg-slate-900/[0.06] dark:bg-black/30 rounded-2xl px-4 py-3 border border-slate-200/60 dark:border-white/10">
                <span className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">Supabase</span>
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-slate-200 dark:text-white/10" />
                    <circle cx="32" cy="32" r="26" fill="transparent" stroke="currentColor" strokeWidth="7" className="text-emerald-500" strokeDasharray="163" strokeDashoffset={163 - (163 * 80) / 100} strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-xs font-bold text-slate-800 dark:text-white">80%</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Row Base: Card 3, Card 4, Card 5 (Side by side) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 3: Design de Interface */}
        <div className="bg-white dark:bg-surface-container-low rounded-3xl p-8 border-t-[6px] md:border-t-0 md:border-l-[6px] border-pink-500 ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-xl relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-25 dark:opacity-30 pointer-events-none group-hover:-translate-y-4 transition-transform duration-500">
            <PenTool size={100} className="text-slate-900 dark:text-white" />
          </div>
          <h3 className="text-3xl font-headline font-bold mb-6 text-pink-700 dark:text-secondary">
            Design de Interface (UX/UI)
          </h3>
          <div className="space-y-4 relative z-10 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Figma</span><span>85%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-pink-500 w-[85%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Tailwind CSS</span><span>95%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-pink-500 w-[95%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Design System</span><span>90%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-pink-500 w-[90%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Usabilidade (UX)</span><span>90%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-pink-500 w-[90%] rounded-full"></div></div>
            </div>
          </div>
        </div>

        {/* Card 4: Sistemas Corporativos */}
        <div className="bg-white dark:bg-surface-container-low rounded-3xl p-8 border-t-[6px] md:border-t-0 md:border-l-[6px] border-yellow-500 ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-xl relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-25 dark:opacity-30 pointer-events-none group-hover:-translate-y-4 transition-transform duration-500">
            <GitBranch size={100} className="text-slate-900 dark:text-white" />
          </div>
          <h3 className="text-3xl font-headline font-bold mb-6 text-yellow-600 dark:text-yellow-400">
            Sistemas & Corporativo
          </h3>
          <div className="space-y-4 relative z-10 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>ERP (SAP/TOTVS)</span><span>90%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-yellow-500 w-[90%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Melhoria Contínua (Lean)</span><span>85%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-yellow-500 w-[85%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>VBA / Excel Avançado</span><span>95%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-yellow-500 w-[95%] rounded-full"></div></div>
            </div>
          </div>
        </div>

        {/* Card 5: Produtividade */}
        <div className="bg-white dark:bg-surface-container-low rounded-3xl p-8 border-t-[6px] md:border-t-0 md:border-l-[6px] border-purple-500 ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-xl relative overflow-hidden group">
          <div className="absolute -bottom-4 -right-4 opacity-25 dark:opacity-30 pointer-events-none group-hover:-translate-y-4 transition-transform duration-500">
            <Terminal size={100} className="text-slate-900 dark:text-white" />
          </div>
          <h3 className="text-3xl font-headline font-bold mb-6 text-purple-700 dark:text-purple-400">
            Metodologias Soft Skills
          </h3>
          <div className="space-y-4 relative z-10 pt-2">
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Engenharia de Prompt</span><span>95%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-purple-500 w-[95%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Inglês Avançado</span><span>80%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-purple-500 w-[80%] rounded-full"></div></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium"><span>Trabalho em Equipe</span><span>100%</span></div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-purple-500 w-[100%] rounded-full"></div></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
