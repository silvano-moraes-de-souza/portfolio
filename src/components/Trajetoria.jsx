import { Rocket, Bot, LineChart, Code, CheckCircle2 } from 'lucide-react';

export default function Trajetoria() {
  const experiences = [
    {
      year: "2025 - Atual",
      company: "Bioz Green",
      role: "Analista de Dados e Automação",
      description: "Desenvolvimento de soluções estratégicas unificando operações logísticas com BI. Automação avançada usando n8n e Python para orquestrar dados do ERP TOTVS Protheus, cortando tempo de processamento massivo.",
      icon: <Bot size={28} className="text-pink-500 dark:text-secondary"/>
    },
    {
      year: "2024 - 2025",
      company: "Dimeso Distribuição S/A",
      role: "Analista de Logística (Foco Tech)",
      description: "Mesmo em cargo de gestão operacional, implantei métodos de visualização de dados operacionais e automações de fluxo que otimizaram o controle de inventário de ponta a ponta.",
      icon: <LineChart size={28} className="text-cyan-500 dark:text-primary"/>
    },
    {
      year: "2022 - 2024",
      company: "CNHi CASE / Célere",
      role: "Analista de Logística Jr",
      description: "Gerenciamento de conflitos de peças com base de dados intensa. Criação de macros (VBA) e planilhas automatizadas que transformaram tarefas manuais de 4 horas em cliques de 5 minutos.",
      icon: <Code size={28} className="text-emerald-500 dark:text-tertiary"/>
    },
    {
      year: "2021 - 2022",
      company: "Mercado Envios",
      role: "Assistente de Inventário",
      description: "A origem do meu olhar sistêmico. Resolução de tickets complexos no ERP SAP, lidando com contabilidade de estoque onde a acuracidade de dados precisava ser cirúrgica e imediata.",
      icon: <Rocket size={28} className="text-yellow-500 dark:text-yellow-400"/>
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto space-y-32 animate-fade-in">
      
      {/* Bloco de Filosofia de Entrega (Foto à Direita, Texto à Esquerda) */}
      <div className="bg-white dark:bg-surface-container-low rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-slate-200 dark:border-none shadow-2xl dark:shadow-none min-h-[500px]">
        
        {/* Background Gráfico Dinâmico */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#99f7ff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-16 items-center">
          
          {/* Esquerda: Textos Grandes */}
          <div className="flex-1 space-y-10">
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold text-cyan-700 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-primary dark:to-primary-dim uppercase tracking-widest leading-tight mb-16">
                Visão Sistêmica
              </h2>
              <h3 className="text-2xl lg:text-3xl font-body text-slate-800 dark:text-white font-bold leading-relaxed">
                Sou um profissional movido pela eficiência. Minha trajetória é marcada pela transição da gestão operacional para a engenharia de soluções tecnológicas.
              </h3>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-xl lg:text-2xl leading-relaxed font-body">
              Não sou apenas um codificador, sou um resolvedor de problemas que utiliza o melhor da tecnologia moderna para acelerar o desenvolvimento de sistemas que antes levariam semanas. 
              <br/><br/>
              <strong className="text-slate-900 dark:text-white">Meu foco</strong> é migrar definitivamente para o ecossistema Tech, aplicando meu olhar analítico para construir ferramentas que eliminem o trabalho manual e potencializem resultados.
            </p>

            <ul className="space-y-6 pt-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={28} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-xl">Automação de Processos:</span>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Criação de workflows autônomos com n8n e Python para integração de APIs e bancos de dados.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={28} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-xl">Visualização de Dados:</span>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Dashboards profissionais em Power BI e Looker Studio, adaptados à necessidade de cada organização.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={28} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-xl">Design de Interface (UI/UX):</span>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Prototipagem no Figma e desenvolvimento de interfaces intuitivas e responsivas com React e Tailwind CSS.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={28} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white text-xl">Engenharia de Soluções:</span>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Tradução de necessidades de negócio em ferramentas tecnológicas escaláveis que geram economia real de tempo.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Direita: Foto Real */}
          <div className="w-full lg:w-[450px] shrink-0">
             <div className="relative group w-full">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-3xl group-hover:bg-primary/40 transition duration-1000"></div>
              <div className="relative bg-surface-container-highest dark:bg-surface-container-highest p-3 rounded-3xl shadow-2xl">
                <img 
                  alt="Silvano Moraes Especialista Tech" 
                  className="w-full aspect-[2/3] object-cover object-[center_15%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://i.ibb.co/KZwW97Q/SILVANO-E-THALITA.png"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==================================================
          TIMELINE VERTICAL - Experiências Ampliadas e Retangulares
      ================================================== */}
      <div className="space-y-16">
        <h3 className="text-4xl lg:text-6xl font-headline font-bold text-center text-slate-900 dark:text-white mb-20 uppercase tracking-wide">
          Evolução <span className="text-cyan-600 dark:text-primary">Profissional</span>
        </h3>
        
        <div className="relative w-full max-w-[1600px] mx-auto">
          {/* Linha Central Guia */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-slate-300 dark:bg-surface-container-highest rounded-full shadow-inner transform lg:-translate-x-1/2"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex items-center justify-between lg:justify-normal w-full mb-20 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Espaço em Branco Lateral */}
              <div className={`hidden lg:block ${idx === 0 ? 'w-[50%]' : 'w-[35%]'}`}></div>
              
              {/* Ícone Central Gigante */}
              <div className="absolute left-8 lg:left-1/2 w-16 h-16 bg-white dark:bg-surface-container-low border-4 border-slate-100 dark:border-surface-container-highest rounded-full shadow-2xl transform -translate-x-1/2 flex items-center justify-center z-10 transition-transform hover:scale-110 duration-300">
                <div className="animate-pulse">{exp.icon}</div>
              </div>
              
              {/* Card de Informação Retangular Ancho */}
              <div className={`w-full ${idx === 0 ? 'lg:w-[50%] lg:mr-auto' : idx === 1 ? 'lg:w-[50%] lg:ml-auto' : idx === 2 ? 'lg:w-[50%] lg:mr-auto' : idx === 3 ? 'lg:w-[50%] lg:ml-auto' : 'lg:w-[50%]'} ml-24 lg:ml-0 px-4`}>
                <div className="bg-white dark:bg-surface-container-low p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-none hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-pink-500/0 opcaity-0 group-hover:opacity-100 dark:group-hover:opacity-30 blur-2xl transition duration-700 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-surface-container-highest text-cyan-700 dark:text-primary text-sm font-mono font-bold tracking-widest uppercase rounded-full mb-6 shadow-sm">
                      {exp.year}
                    </span>
                    <h4 className="text-2xl lg:text-3xl font-headline font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h4>
                    <h5 className="text-lg lg:text-xl font-bold text-pink-600 dark:text-secondary mb-6 uppercase tracking-widest">{exp.company}</h5>
                    <p className="text-slate-700 dark:text-slate-300 text-lg lg:text-xl leading-relaxed font-body">
                      {exp.description}
                    </p>
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
