import { Database, Server, Bot, ShieldCheck, Smartphone } from 'lucide-react';

// Números e textos espelham o perfil do LinkedIn. Nada aqui sem origem.
const KPIS = [
  { valor: '60%', label: 'Menos tempo no fechamento mensal', cor: 'text-cyan-600 dark:text-primary' },
  { valor: '80%', label: 'Dos relatórios automatizados', cor: 'text-emerald-600 dark:text-tertiary' },
  { valor: '3h→2min', label: 'Roteirização de entregas', cor: 'text-pink-600 dark:text-secondary' },
  { valor: '2007', label: 'Na operação desde', cor: 'text-yellow-600 dark:text-yellow-400' },
];

const STACKS = [
  {
    titulo: 'Dados e ETL',
    icone: Database,
    borda: 'border-cyan-500',
    corTitulo: 'text-cyan-700 dark:text-primary',
    itens: ['Python', 'SQL', 'PostgreSQL 16', 'ETL incremental', 'Materialized views'],
  },
  {
    titulo: 'Backend e APIs',
    icone: Server,
    borda: 'border-emerald-500',
    corTitulo: 'text-emerald-700 dark:text-tertiary',
    itens: ['FastAPI', 'Flask', 'APIs REST', 'Microsserviços', 'Node.js'],
  },
  {
    titulo: 'IA e Automação',
    icone: Bot,
    borda: 'border-pink-500',
    corTitulo: 'text-pink-700 dark:text-secondary',
    itens: ['LLMs', 'RAG', 'MCP', 'n8n', 'Engenharia de prompt'],
  },
  {
    titulo: 'Infra e Segurança',
    icone: ShieldCheck,
    borda: 'border-yellow-500',
    corTitulo: 'text-yellow-600 dark:text-yellow-400',
    itens: ['Docker', 'Linux', 'Nginx + SSL', 'Fail2ban', 'GeoIP', 'HMAC'],
  },
  {
    titulo: 'Front e Mobile',
    icone: Smartphone,
    borda: 'border-purple-500',
    corTitulo: 'text-purple-700 dark:text-purple-400',
    itens: ['React', 'React Native (Expo)', 'Supabase'],
  },
];

function StackCard({ stack, grande }) {
  const Icone = stack.icone;
  return (
    <div className={`flex-1 bg-white dark:bg-surface-container-low rounded-3xl ${grande ? 'p-8 lg:p-10 border-l-[8px]' : 'p-8 border-t-[6px] md:border-t-0 md:border-l-[6px]'} ${stack.borda} ring-1 ring-slate-200 dark:ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group`}>
      <div className={`absolute ${grande ? 'top-10 right-10' : '-bottom-4 -right-4'} opacity-25 dark:opacity-30 pointer-events-none group-hover:scale-110 transition-transform duration-700`}>
        <Icone size={grande ? 140 : 100} className="text-slate-900 dark:text-white" />
      </div>
      <h3 className={`text-2xl md:text-3xl font-headline font-bold mb-8 ${stack.corTitulo} relative z-10`}>
        {stack.titulo}
      </h3>
      <div className="flex flex-wrap gap-3 relative z-10">
        {stack.itens.map(item => (
          <span key={item} className="px-4 py-2 bg-slate-900/[0.06] dark:bg-black/30 rounded-xl border border-slate-200/60 dark:border-white/10 text-base md:text-lg font-bold font-mono text-slate-800 dark:text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SobreMim() {
  return (
    <section className="pt-24 pb-6 px-4 md:px-6 w-full max-w-[1440px] mx-auto animate-fade-in" id="sobre">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-start mb-12">

        <div className="xl:col-span-8 space-y-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            <div className="relative group w-full md:w-[360px] lg:w-[460px] shrink-0">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition duration-1000"></div>
              <div className="relative bg-surface-container-low p-2 rounded-2xl" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4)' }}>
                <img
                  alt="Silvano Moraes de Souza, engenheiro de software"
                  className="w-full aspect-[4/5] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/img/silvano.webp"
                />
              </div>
              <div className="absolute bottom-6 -right-4 bg-surface-container-highest/90 backdrop-blur-md p-4 rounded-lg border border-outline-variant/20 font-mono text-[10px] text-tertiary-dim tracking-wider uppercase leading-relaxed">
                Local: Sorocaba_SP<br/>
                Foco: Dados + Software<br/>
                Modelo: Híbrido · Remoto
              </div>
            </div>

            <div className="space-y-8 flex-1 pt-2">
              <div className="space-y-4 mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tighter leading-[1.1] dark:text-white text-slate-900">
                  Engenheiro de <span className="text-cyan-600 dark:text-primary">Software</span>
                </h1>
                <p className="font-mono text-lg md:text-xl text-slate-500 dark:text-slate-400 font-bold">
                  Python, APIs, Automação e Dados em Produção
                </p>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-2xl lg:text-3xl leading-relaxed font-body">
                Construo sistemas de dados que colocam informação na mão de quem decide. Arquiteto, desenvolvo e mantenho toda a infraestrutura de software da <strong className="text-slate-900 dark:text-white">Bioz Green</strong>, do banco de dados ao deploy.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-2xl lg:text-3xl leading-relaxed font-body">
                Comecei como almoxarife em 2007. Passei por inventário, suporte e logística automatizando o que era manual, e hoje respondo ponta a ponta por <strong className="text-slate-900 dark:text-white">ETL, APIs, microsserviços em Docker, agentes de IA e segurança</strong> em produção.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-slate-200 dark:border-white/10 mt-8">
                {KPIS.map((kpi, i) => (
                  <div key={kpi.label} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-12 bg-slate-300 dark:bg-white/10 flex-shrink-0 self-center"></div>}
                    <div className="flex flex-col max-w-[140px]">
                      <span className={`text-3xl md:text-4xl font-headline font-bold ${kpi.cor}`}>{kpi.valor}</span>
                      <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 font-bold">{kpi.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 flex flex-col gap-8 h-full">
          <StackCard stack={STACKS[0]} grande />
          <StackCard stack={STACKS[1]} grande />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STACKS.slice(2).map(stack => <StackCard key={stack.titulo} stack={stack} />)}
      </div>
    </section>
  );
}
