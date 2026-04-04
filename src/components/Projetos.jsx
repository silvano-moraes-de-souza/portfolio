import { Terminal, Layers, Zap, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import projetos from '../data/portfolio.json';

function renderPythonCode() {
  const codeLines = [
    {text: 'import asyncio', color: 'keyword'},
    {text: 'import pandas as pd', color: 'keyword'},
    {text: '', color: 'plain'},
    {text: 'class DataPipeline:', color: 'class'},
    {text: '    """Orquestra ETL."""', color: 'string'},
    {text: '    ', color: 'plain'},
    {text: '    def __init__(self, src):', color: 'function'},
    {text: '        self.src = src', color: 'self'},
    {text: '', color: 'plain'},
    {text: '    async def _connect(self):', color: 'function'},
    {text: '        # Lógica para conectar ao ERP (TOTVS/SAP)', color: 'comment'},
    {text: '        pass', color: 'keyword'},
    {text: '', color: 'plain'},
    {text: '    async def extract(self):', color: 'function'},
    {text: '        # Conecta ao ERP e extrai dados brutos', color: 'comment'},
    {text: '        raw = await self._connect()', parts: [
      {text: '        raw = ', color: 'plain'},
      {text: 'await', color: 'keyword'},
      {text: ' ', color: 'plain'},
      {text: 'self', color: 'self'},
      {text: '._connect()', color: 'function'}
    ]},
    {text: '        return [r.dict() for r in raw]', parts: [
      {text: '        ', color: 'plain'},
      {text: 'return', color: 'keyword'},
      {text: ' [r.', color: 'plain'},
      {text: 'dict', color: 'function'},
      {text: '() ', color: 'plain'},
      {text: 'for', color: 'keyword'},
      {text: ' r ', color: 'plain'},
      {text: 'in', color: 'keyword'},
      {text: ' raw]', color: 'plain'}
    ]},
    {text: '', color: 'plain'},
    {text: '    def transform(self, data):', color: 'function'},
    {text: '        # Limpa e transforma os dados em DataFrame', color: 'comment'},
    {text: '        ok = [self._clean(r) for r in data]', parts: [
      {text: '        ok = [', color: 'plain'},
      {text: 'self', color: 'self'},
      {text: '._clean(r) ', color: 'function'},
      {text: 'for', color: 'keyword'},
      {text: ' r ', color: 'plain'},
      {text: 'in', color: 'keyword'},
      {text: ' data]', color: 'plain'}
    ]},
    {text: '        return pd.DataFrame(ok)', parts: [
      {text: '        ', color: 'plain'},
      {text: 'return', color: 'keyword'},
      {text: ' pd.DataFrame(ok)', color: 'function'}
    ]},
    {text: '', color: 'plain'},
    {text: '    def _clean(self, r):', color: 'function'},
    {text: '        # Lógica de limpeza individual', color: 'comment'},
    {text: '        return r', parts: [
      {text: '        ', color: 'plain'},
      {text: 'return', color: 'keyword'},
      {text: ' r', color: 'plain'}
    ]},
    {text: '', color: 'plain'},
    {text: '    async def load(self, df):', color: 'function'},
    {text: '        # BigQuery + PowerBI', color: 'comment'},
    {text: '        await bq.insert(df)', parts: [
      {text: '        ', color: 'plain'},
      {text: 'await', color: 'keyword'},
      {text: ' bq.insert(df)', color: 'function'}
    ]},
    {text: '        pbi.refresh("ops")', parts: [
      {text: '        pbi.refresh(', color: 'function'},
      {text: '"ops"', color: 'string'},
      {text: ')', color: 'function'}
    ]},
    {text: '', color: 'plain'},
    {text: 'async def main():', color: 'function'},
    {text: '    p = DataPipeline("totvs")', parts: [
      {text: '    p = ', color: 'plain'},
      {text: 'DataPipeline', color: 'class'},
      {text: '(', color: 'plain'},
      {text: '"totvs"', color: 'string'},
      {text: ')', color: 'plain'}
    ]},
    {text: '    raw = await p.extract()', parts: [
      {text: '    raw = ', color: 'plain'},
      {text: 'await', color: 'keyword'},
      {text: ' p.extract()', color: 'function'}
    ]},
    {text: '    df = p.transform(raw)', parts: [
      {text: '    df = p.transform(raw)', color: 'function'}
    ]},
    {text: '    await p.load(df)', parts: [
      {text: '    ', color: 'plain'},
      {text: 'await', color: 'keyword'},
      {text: ' p.load(df)', color: 'function'}
    ]},
    {text: '    print("✅ Pipeline OK")', parts: [
      {text: '    ', color: 'plain'},
      {text: 'print', color: 'function'},
      {text: '(', color: 'plain'},
      {text: '"✅ Pipeline OK"', color: 'string'},
      {text: ')', color: 'plain'}
    ]},
    {text: '', color: 'plain'},
    {text: 'if __name__ == "__main__":', parts: [
      {text: 'if ', color: 'keyword'},
      {text: '__name__', color: 'keyword'},
      {text: ' == ', color: 'plain'},
      {text: '"__main__"', color: 'string'},
      {text: ':', color: 'plain'}
    ]},
    {text: '    asyncio.run(main())', parts: [
      {text: '    asyncio.run(main())', color: 'function'}
    ]},
  ];

  const colorClasses = {
    keyword: 'text-[#569cd6]',
    class: 'text-[#4ec9b0]',
    function: 'text-[#dcdcaa]',
    self: 'text-[#c586c0]',
    string: 'text-[#ce9178]',
    comment: 'text-[#6a9955]',
    plain: 'text-[#d4d4d4]',
  };

  return codeLines.map((line, index) => (
    <div key={index} style={{whiteSpace: 'pre'}}>
      {line.parts ? (
        line.parts.map((part, partIndex) => (
          <span key={partIndex} className={colorClasses[part.color] || colorClasses.plain}>
            {part.text}
          </span>
        ))
      ) : (
        <span className={colorClasses[line.color] || colorClasses.plain}>
          {line.text}
        </span>
      )}
    </div>
  ));
}



export default function Projetos() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [deployProgress, setDeployProgress] = useState(0);
  const [showDeployMessage, setShowDeployMessage] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    let pulseTimer;
    if (showDeployMessage) {
      setIsPulsing(true);
      pulseTimer = setTimeout(() => {
        setIsPulsing(false);
      }, 3000);
    }
    return () => {
      if (pulseTimer) clearTimeout(pulseTimer);
    };
  }, [showDeployMessage]);
  
  const handleRunScript = () => {
    if (isDeploying) return;
    
    setIsDeploying(true);
    setDeployProgress(0);
    setShowDeployMessage(false);
    
    const duration = 3000; // 3 segundos
    const interval = 100; // atualizar a cada 100ms
    const increment = 100 / (duration / interval);
    
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += increment;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          setShowDeployMessage(true);
          setIsDeploying(false);
        }, 300);
      }
      setDeployProgress(Math.min(progress, 100));
    }, interval);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto space-y-32 animate-fade-in">
      
      {/* ==================================================
          BLOCO: CÓDIGO LIMPO & EDITOR FAKE 
      ================================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="xl:col-span-5 space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-slate-900 dark:text-white leading-tight uppercase relative">
            Código Limpo<br/>
            <span className="text-cyan-600 dark:text-tertiary">Insights Escaláveis</span>
          </h2>
          <p className="text-slate-700 dark:text-on-surface-variant text-xl lg:text-2xl leading-relaxed font-body">
            Desenvolvo arquiteturas onde o processamento de dados e a interface são independentes. Utilizo Python para criar serviços robustos que consomem e fornecem dados via APIs, garantindo que o sistema seja fácil de manter e escalar sem interrupções.
          </p>
          <p className="text-slate-700 dark:text-on-surface-variant text-xl lg:text-2xl leading-relaxed font-body">
            Minha visão de dados vai além do dashboard. Estruturo todo o pipeline: da extração em sistemas como SAP/TOTVS ao tratamento em SQL, culminando em visualizações estratégicas no Power BI ou Looker Studio que respondem às perguntas vitais do negócio.
          </p>
          <div className="space-y-8 pt-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 transition-colors">
                <Terminal className="text-cyan-600 dark:text-primary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-on-surface font-bold tracking-tight">Backend Desacoplado & APIs</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-pink-100 dark:group-hover:bg-pink-900/40 transition-colors">
                <Layers className="text-pink-600 dark:text-secondary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-on-surface font-bold tracking-tight">Arquitetura de BI 360º</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                <Zap className="text-emerald-600 dark:text-tertiary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-on-surface font-bold tracking-tight">Workflows N8N Real-time</span>
            </div>
          </div>
        </div>

        {/* Editor Fake Avançado - Ampliado */}
        <div className="xl:col-span-7">
          <div className="bg-[#1e1e1e] rounded-2xl border-2 border-slate-700 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,242,255,0.08)] overflow-hidden transition-all group hover:border-cyan-500/50">
            
            {/* Header VS Code Style */}
            <div className="bg-[#2d2d2d] px-6 py-4 flex items-center justify-between border-b border-black">
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              </div>
              <div className="text-base font-mono text-slate-300 font-bold tracking-widest uppercase">Pipeline.py</div>
              
              {/* Botão Run */}
              <button 
                onClick={handleRunScript}
                disabled={isDeploying}
                className={`flex items-center gap-2 px-4 py-2 ${isDeploying ? 'bg-[#1a4a35]/70' : 'bg-[#1a4a35] hover:bg-[#206144]'} border border-[#27c93f]/30 rounded text-[#27c93f] text-sm font-mono font-bold uppercase transition-all disabled:opacity-70`}
                title="Deploy em Produção"
              >
                <Play size={16} fill="currentColor" /> {isDeploying ? 'Deploying...' : 'Deploy'}
              </button>
            </div>
            
            {/* Barra de Progresso */}
            {isDeploying && (
              <div className="px-6 py-2 bg-[#2d2d2d] border-t border-black">
                <div className="w-full bg-[#1a1a1a] rounded-full h-2 mb-2">
                  <div 
                    className="bg-[#27c93f] h-2 rounded-full transition-all duration-100"
                    style={{ width: `${deployProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Deploying pipeline...</span>
                  <span>{Math.round(deployProgress)}%</span>
                </div>
              </div>
            )}
            
            {/* Mensagem de Conclusão */}
            {showDeployMessage && (
              <div className="px-8 py-6 bg-[#1a4a35] border-t border-[#27c93f]/30 animate-pulse">
                <div className="text-center space-y-4">
                  <div className="text-[#27c93f] font-mono font-bold text-xl md:text-2xl">
                    💻 Conexão Estabelecida!
                  </div>
                  <div className="text-slate-200 text-base md:text-lg leading-relaxed space-y-4">
                    <p className="text-white/90">
                      Que bom ter você aqui. Sou o Silvano e este portfólio é a prova de que design intuitivo e backend robusto podem (e devem) andar juntos.
                    </p>
                    <p className="text-white/80">
                      Role para baixo e veja como transformo regras de negócio complexas em experiências digitais fluidas.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Corpo do Código com Fontes Maiores */}
            <div className="p-8 font-mono text-lg md:text-xl leading-[1.8] overflow-x-auto text-[#d4d4d4]" style={{whiteSpace: 'pre'}}>
              {renderPythonCode()}
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          BLOCO: CARDS DOS PROJETOS REAIS (Grid 4x4)
      ================================================== */}
      <div className="pt-20 border-t-2 border-slate-200 dark:border-outline-variant/30">
        <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-16 text-slate-800 dark:text-white uppercase tracking-wider text-center lg:text-left">
          Meus Projetos em <span className="text-cyan-600 dark:text-primary">Destaque</span>
        </h2>
        
        <div className="relative">
          {/* Contêiner do carrossel - Mostra 2 linhas de 4 cards cada */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projetos.projetos
              .slice((currentPage - 1) * 8, currentPage * 8)
              .map((projeto) => (
                <div key={projeto.id} className="group relative bg-white dark:bg-surface-container-low rounded-3xl border-2 border-primary/20 dark:border-primary/30 overflow-hidden transition-all duration-300 shadow-lg shadow-white/20 dark:shadow-primary/5 hover:border-primary/40 dark:hover:border-primary/50 flex flex-col h-full transform hover:-translate-y-2">
                  
                  {/* Imagem Cover Tática */}
                  <div className="w-full h-44 bg-slate-100 dark:bg-surface-container-high relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    <div className="w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                    </div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-white font-mono font-bold text-xs uppercase tracking-widest opacity-80">Tech Concept</span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1 bg-white dark:bg-surface-container-low relative z-20">
                    <h3 className="text-2xl font-headline font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-cyan-600 dark:group-hover:text-primary transition-colors">{projeto.titulo}</h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed flex-1 mb-8">
                      {projeto.descricao}
                    </p>
                    
                    <div className="mt-auto space-y-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {projeto.tecnologias.map(tech => (
                          <span key={tech} className="px-3 py-1.5 bg-slate-50 dark:bg-surface-container-highest text-[10px] sm:text-xs font-mono text-slate-800 dark:text-primary font-bold uppercase tracking-widest rounded-md border border-slate-200 dark:border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Botão Ver Projeto */}
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center px-6 py-4 bg-primary dark:bg-primary text-slate-900 dark:text-slate-900 font-bold font-mono tracking-widest uppercase rounded-xl hover:bg-primary-container dark:hover:bg-primary-dim gap-2 transition-all shadow-lg hover:shadow-primary/30 group-hover:scale-[1.02]">
                        Ver Projeto <span className="text-xl">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Controles de navegação */}
          <div className="flex items-center justify-center mt-16 gap-8">
            {/* Seta esquerda */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:border-primary hover:bg-primary/10 hover:shadow-primary/20 hover:shadow-lg'}`}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>

            {/* Números da paginação */}
            <div className="flex items-center gap-4">
              {Array.from({ length: Math.ceil(projetos.projetos.length / 8) }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-full font-mono font-bold text-lg transition-all ${currentPage === pageNum ? 'bg-primary text-slate-900' : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Seta direita */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(projetos.projetos.length / 8)))}
              className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/30 transition-all ${currentPage === Math.ceil(projetos.projetos.length / 8) ? 'opacity-30 cursor-not-allowed' : 'hover:border-primary hover:bg-primary/10 hover:shadow-primary/20 hover:shadow-lg'}`}
              disabled={currentPage === Math.ceil(projetos.projetos.length / 8)}
            >
              <ChevronRight className="text-primary" size={24} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}