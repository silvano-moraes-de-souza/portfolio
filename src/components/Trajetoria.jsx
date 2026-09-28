import { Rocket, Bot, LineChart, Code, CheckCircle2, Boxes, ShoppingCart, Warehouse } from 'lucide-react';

// Linha do tempo igual à seção Experiência do LinkedIn.
const experiences = [
  {
    year: 'jul/2026 - Atual',
    company: 'Bioz Green',
    role: 'Engenheiro de Software Jr',
    description: 'Toda a arquitetura de software da empresa: APIs, infraestrutura, segurança, automação e IA. Painel financeiro, assistente de IA no WhatsApp para a diretoria, plataforma de projetos BiozPlanner, app dos motoristas e auditorias periódicas de arquitetura e segurança.',
    icon: <Bot size={28} className="text-pink-500 dark:text-secondary" />,
  },
  {
    year: 'dez/2025 - jul/2026',
    company: 'Bioz Green',
    role: 'Analista de Dados',
    description: 'Pipeline de ETL a partir do Tiny ERP, dashboards e API em Flask com Gunicorn, atrás de Nginx com SSL, em Docker. O fechamento mensal ficou cerca de 60% mais rápido e 80% dos relatórios passaram a sair sozinhos.',
    icon: <LineChart size={28} className="text-cyan-500 dark:text-primary" />,
  },
  {
    year: 'ago/2025 - dez/2025',
    company: 'Bioz Green',
    role: 'Analista de Compras e Suprimentos',
    description: 'Gestão dos dados de 34 fornecedores. Foi aqui que comecei a transição para dados, com automações em VBA e Python que economizaram 7 horas por semana ao departamento.',
    icon: <ShoppingCart size={28} className="text-emerald-500 dark:text-tertiary" />,
  },
  {
    year: 'out/2024 - jul/2025',
    company: 'DIMESO S.A',
    role: 'Analista de Logística',
    description: 'Scripts em Python e dashboards operacionais que economizaram 6 horas por semana.',
    icon: <Boxes size={28} className="text-yellow-500 dark:text-yellow-400" />,
  },
  {
    year: 'abr/2022 - fev/2024',
    company: 'Grupo Movicarga & Célere',
    role: 'Analista de Logística Jr',
    description: 'Automações em Python e VBA e 13 KPIs acompanhados, economizando 24 horas por mês.',
    icon: <Code size={28} className="text-pink-500 dark:text-secondary" />,
  },
  {
    year: 'mai/2021 - abr/2022',
    company: 'Mercado Livre',
    role: 'Assistente de Inventário',
    description: 'Centro de fulfillment em Cajamar: auditoria de estoque e conciliação de dados com SAP, VBA e Access, com 98,7% de acurácia.',
    icon: <Rocket size={28} className="text-cyan-500 dark:text-primary" />,
  },
  {
    year: '2007 - 2021',
    company: 'Heller, ZF do Brasil, Seicom, Pentair, Chain Service e freelancer',
    role: 'Almoxarifado, inventário e suporte',
    description: 'Comecei como jovem aprendiz no almoxarifado industrial. Em cada função fui trocando trabalho manual por Excel, VBA e depois Python: na Chain Service, um fechamento de 2 dias passou a levar de 4 a 5 horas; como freelancer, montei análises em Python, SQL e Power BI para microempresas de um escritório de contabilidade.',
    icon: <Warehouse size={28} className="text-emerald-500 dark:text-tertiary" />,
  },
];

const entregas = [
  {
    titulo: 'Dados em produção',
    texto: 'Painel financeiro consumindo o ERP por API: ETL incremental em Python, PostgreSQL 16 com materialized views, Flask atrás de Nginx com SSL, Docker num VPS que eu administro.',
  },
  {
    titulo: 'IA aplicada',
    texto: 'Assistente de IA no WhatsApp com LLMs orquestrados via n8n, automatizando consultas, agenda, aprovações e notificações da diretoria.',
  },
  {
    titulo: 'Produtos internos',
    texto: 'Plataforma de gestão de projetos BiozPlanner (React, Node.js, Supabase) com deploy contínuo e autenticação própria, e app para motoristas em Expo com QR code e sincronização offline.',
  },
  {
    titulo: 'Segurança',
    texto: 'Auditorias periódicas de arquitetura e segurança de todo o parque de sistemas; GeoIP, Fail2ban, autenticação HMAC e monitoramento de integridade em produção.',
  },
];

export default function Trajetoria() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-32 animate-fade-in">

      <div className="bg-white dark:bg-surface-container-low rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-slate-200 dark:border-none shadow-2xl dark:shadow-none min-h-[500px]">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#99f7ff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-10">
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-cyan-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-primary dark:to-primary-dim uppercase tracking-widest leading-tight mb-16">
                Do almoxarifado ao deploy
              </h2>
              <h3 className="text-2xl lg:text-3xl font-body text-slate-800 dark:text-white font-bold leading-relaxed">
                Conheço a operação por dentro porque trabalhei nela por 18 anos antes de escrever o software que ela usa.
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-xl lg:text-2xl leading-relaxed font-body">
              Almoxarife, inventário, suporte, logística, compras. Em cada cargo a planilha virou macro, a macro virou script e o script virou sistema. Hoje, na Bioz Green, microsserviços em Docker, deploy e monitoramento são responsabilidade minha, ponta a ponta.
            </p>

            <ul className="space-y-6 pt-4">
              {entregas.map(e => (
                <li key={e.titulo} className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={28} />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-xl">{e.titulo}</span>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">{e.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-[450px] shrink-0">
            <div className="relative group w-full">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/40 transition duration-1000"></div>
              <div className="relative bg-surface-container-highest dark:bg-surface-container-highest p-3 rounded-3xl shadow-2xl">
                <img
                  alt="Silvano Moraes de Souza"
                  className="w-full aspect-[2/3] object-cover object-[center_15%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  src="/img/silvano-2.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        <h3 className="text-4xl lg:text-6xl font-headline font-bold text-center text-slate-900 dark:text-white mb-20 uppercase tracking-wide">
          Evolução <span className="text-cyan-600 dark:text-primary">Profissional</span>
        </h3>

        <div className="relative w-full max-w-[1600px] mx-auto">
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-slate-300 dark:bg-surface-container-highest rounded-full shadow-inner transform lg:-translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${exp.role}`} className={`relative flex items-center justify-between lg:justify-normal w-full mb-20 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="hidden lg:block w-[50%]"></div>

              <div className="absolute left-8 lg:left-1/2 w-16 h-16 bg-white dark:bg-surface-container-low border-4 border-slate-100 dark:border-surface-container-highest rounded-full shadow-2xl transform -translate-x-1/2 flex items-center justify-center z-10 transition-transform hover:scale-110 duration-300">
                <div className="animate-pulse">{exp.icon}</div>
              </div>

              <div className={`w-full lg:w-[50%] ${idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} ml-24 lg:ml-0 px-4`}>
                <div className="bg-white dark:bg-surface-container-low p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-none hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30 blur-2xl transition duration-700 pointer-events-none"></div>
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-surface-container-highest text-cyan-700 dark:text-primary text-sm font-mono font-bold tracking-widest uppercase rounded-full mb-6 shadow-sm">
                      {exp.year}
                    </span>
                    <h4 className="text-2xl lg:text-3xl font-headline font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h4>
                    <h5 className="text-lg lg:text-xl font-bold text-pink-600 dark:text-secondary mb-6 uppercase tracking-widest">{exp.company}</h5>
                    <p className="text-slate-700 dark:text-slate-300 text-lg lg:text-xl leading-relaxed font-body">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
