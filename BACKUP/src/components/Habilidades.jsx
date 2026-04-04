// Propriedade Intelectual: Silvano Moraes de Souza
import { Database, Code2 } from 'lucide-react';

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-3xl font-headline font-bold tracking-tight text-slate-900 dark:text-white">Proficiência Técnica</h2>
        <span className="font-mono text-xs text-cyan-600 dark:text-primary/60 tracking-widest uppercase hidden md:inline-block">System.Diagnostics.Status: Otimizado</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Data Engineering Card */}
        <div className="md:col-span-2 bg-white dark:bg-surface-container-low rounded-2xl p-8 relative overflow-hidden group border border-slate-200 dark:border-none shadow-sm dark:shadow-none hover:shadow-lg transition-all">
          <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Database size={100} className="text-slate-900 dark:text-white" />
          </div>
          <h3 className="text-xl font-headline font-bold mb-8 text-cyan-600 dark:text-primary flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-cyan-500 dark:bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]"></span>
            Ciência de Dados & Analytics
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            {/* Barras de progresso */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-tighter text-slate-600 dark:text-slate-300 font-bold">
                <span>Python (Pandas/NumPy)</span><span>95%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 dark:bg-primary dark:glow-primary rounded-full w-[95%] transition-all duration-1000"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-tighter text-slate-600 dark:text-slate-300 font-bold">
                <span>SQL (Postgre/BigQuery)</span><span>90%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 dark:bg-primary dark:glow-primary rounded-full w-[90%] transition-all duration-1000 delay-100"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-tighter text-slate-600 dark:text-slate-300 font-bold">
                <span>Tableau & Power BI</span><span>85%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 dark:bg-primary dark:glow-primary rounded-full w-[85%] transition-all duration-1000 delay-200"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono uppercase tracking-tighter text-slate-600 dark:text-slate-300 font-bold">
                <span>Machine Learning</span><span>75%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 dark:bg-primary dark:glow-primary rounded-full w-[75%] transition-all duration-1000 delay-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Front-end Card (Bento Grid) */}
        <div className="bg-white dark:bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between border-l-4 border-pink-500 dark:border-secondary shadow-sm dark:shadow-none hover:shadow-lg transition-all relative overflow-hidden group">
           <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code2 size={100} className="text-slate-900 dark:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold mb-6 text-pink-600 dark:text-secondary">Desenvolvimento Tech</h3>
            <div className="space-y-6 relative z-10">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-pink-200 dark:border-secondary/20 flex items-center justify-center relative shadow-[inset_0_0_10px_rgba(255,81,250,0.1)]">
                  <svg className="w-12 h-12 -rotate-90 absolute">
                    <circle className="text-transparent" cx="24" cy="24" fill="transparent" r="22" stroke="currentColor" strokeWidth="2"></circle>
                    <circle className="text-pink-500 dark:text-secondary drop-shadow-[0_0_5px_rgba(255,81,250,0.5)]" cx="24" cy="24" fill="transparent" r="22" stroke="currentColor" strokeDasharray="138" strokeDashoffset="13.8" strokeWidth="2"></circle>
                  </svg>
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-white">90</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-white">React & Next.js</div>
                  <div className="text-[10px] text-slate-500 dark:text-outline uppercase tracking-widest font-bold">Arquitetura Avançada</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-pink-200 dark:border-secondary/20 flex items-center justify-center relative shadow-[inset_0_0_10px_rgba(255,81,250,0.1)]">
                  <svg className="w-12 h-12 -rotate-90 absolute">
                    <circle className="text-transparent" cx="24" cy="24" fill="transparent" r="22" stroke="currentColor" strokeWidth="2"></circle>
                    <circle className="text-pink-500 dark:text-secondary drop-shadow-[0_0_5px_rgba(255,81,250,0.5)]" cx="24" cy="24" fill="transparent" r="22" stroke="currentColor" strokeDasharray="138" strokeDashoffset="6.9" strokeWidth="2"></circle>
                  </svg>
                  <span className="font-mono text-xs font-bold text-slate-700 dark:text-white">95</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800 dark:text-white">Tailwind & CSS3</div>
                  <div className="text-[10px] text-slate-500 dark:text-outline uppercase tracking-widest font-bold">Design System Sólido</div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-outline-variant/10">
            <p className="text-xs text-slate-500 dark:text-on-surface-variant font-mono leading-relaxed">
              Criando interfaces impecáveis que lidam com milhões de dados sem perder nenhum frame.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
