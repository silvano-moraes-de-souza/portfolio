import { Terminal, Layers, Zap, Play, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import projetos from '../data/portfolio.json';
import { bannerUrl, GITHUB_PROFILE } from '../data/projects';

SyntaxHighlighter.registerLanguage('python', python);

// Trecho do ETL do Dashboard Financeiro BI (scripts/etl/coleta_tiny.py), sem as linhas de log.
const CODIGO_REAL = `def safe_request(url, params, tentativas=3, timeout=60):
    """Request com retry exponencial: 10s, 30s, 60s"""
    for tentativa in range(tentativas):
        try:
            r = requests.get(url, params=params, timeout=timeout)
            if r.status_code == 429:
                print("  Rate limit (429). Aguardando 60s...")
                time.sleep(60)
                continue
            if r.status_code != 200 or not r.text.strip():
                time.sleep(2)
                continue
            return r.json()
        except requests.exceptions.Timeout:
            espera = [10, 30, 60][tentativa]
            print(f"  Timeout. Retry {tentativa+1}/{tentativas} em {espera}s...")
            time.sleep(espera)
        except requests.exceptions.ConnectionError:
            espera = [10, 30, 60][tentativa]
            time.sleep(espera)
    return {}`;

export default function Projetos() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [showDeployMessage, setShowDeployMessage] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    if (!isDeploying) return undefined;
    const interval = setInterval(() => {
      setDeployProgress(prev => {
        const next = Math.min(prev + 100 / 30, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowDeployMessage(true);
            setIsDeploying(false);
          }, 300);
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isDeploying]);

  const handleRunScript = () => {
    if (isDeploying) return;
    setDeployProgress(0);
    setShowDeployMessage(false);
    setIsDeploying(true);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto space-y-32 animate-fade-in">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="xl:col-span-5 space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-slate-900 dark:text-white leading-tight uppercase relative">
            Código em<br/>
            <span className="text-cyan-600 dark:text-tertiary">Produção</span>
          </h2>
          <p className="text-slate-700 dark:text-on-surface-variant text-xl lg:text-2xl leading-relaxed font-body">
            O código ao lado é real, só sem as linhas de log: é a função que puxa os dados do ERP no painel financeiro. A API derruba conexões e limita requisições, então cada chamada tem timeout, espera crescente entre tentativas e pausa quando recebe 429.
          </p>
          <p className="text-slate-700 dark:text-on-surface-variant text-xl lg:text-2xl leading-relaxed font-body">
            É assim que trabalho em todos os projetos abaixo: o dado sai do sistema de origem, passa por um pipeline que aguenta falha, é tratado em SQL e chega a quem decide por uma API ou um painel. Cada projeto tem o código aberto no GitHub com as decisões de engenharia e as limitações escritas.
          </p>
          <div className="space-y-8 pt-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/40 transition-colors">
                <Terminal className="text-cyan-600 dark:text-primary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-white font-bold tracking-tight">ETL, SQL e APIs</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-pink-100 dark:group-hover:bg-pink-900/40 transition-colors">
                <Layers className="text-pink-600 dark:text-secondary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-white font-bold tracking-tight">Docker, Linux e segurança</span>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-slate-100 dark:bg-surface-container-highest rounded-xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                <Zap className="text-emerald-600 dark:text-tertiary" size={32} />
              </div>
              <span className="text-xl lg:text-2xl font-mono text-slate-800 dark:text-white font-bold tracking-tight">LLMs, n8n e automação</span>
            </div>
          </div>
        </div>

        <div className="xl:col-span-7">
          <div className="bg-[#1e1e1e] rounded-2xl border-2 border-slate-700 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,242,255,0.08)] overflow-hidden transition-all group hover:border-cyan-500/50">
            <div className="bg-[#2d2d2d] px-6 py-4 flex items-center justify-between border-b border-black">
              <div className="flex gap-3">
                <div className="w-4 h-4 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                <div className="w-4 h-4 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              </div>
              <div className="text-base font-mono text-slate-300 font-bold tracking-widest">coleta_tiny.py</div>
              <button
                onClick={handleRunScript}
                disabled={isDeploying}
                className={`flex items-center gap-2 px-4 py-2 ${isDeploying ? 'bg-[#1a4a35]/70' : 'bg-[#1a4a35] hover:bg-[#206144]'} border border-[#27c93f]/30 rounded text-[#27c93f] text-sm font-mono font-bold uppercase transition-all disabled:opacity-70`}
                title="Executar"
              >
                <Play size={16} fill="currentColor" /> {isDeploying ? 'Rodando...' : 'Rodar'}
              </button>
            </div>

            {isDeploying && (
              <div className="px-6 py-2 bg-[#2d2d2d] border-t border-black">
                <div className="w-full bg-[#1a1a1a] rounded-full h-2 mb-2">
                  <div className="bg-[#27c93f] h-2 rounded-full transition-all duration-100" style={{ width: `${deployProgress}%` }}></div>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Coletando do ERP...</span>
                  <span>{Math.round(deployProgress)}%</span>
                </div>
              </div>
            )}

            {showDeployMessage && (
              <div className="px-8 py-6 bg-[#1a4a35] border-t border-[#27c93f]/30">
                <div className="text-center space-y-3">
                  <div className="text-[#27c93f] font-mono font-bold text-xl md:text-2xl">Coleta concluída</div>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    Esse é o primeiro passo do pipeline que reduziu o fechamento mensal em cerca de 60%. Os projetos abaixo mostram o resto.
                  </p>
                </div>
              </div>
            )}

            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{ margin: 0, padding: '2rem', background: '#1e1e1e', fontSize: '1rem', lineHeight: 1.7 }}
            >
              {CODIGO_REAL}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t-2 border-slate-200 dark:border-outline-variant/30">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-slate-800 dark:text-white uppercase tracking-wider text-center lg:text-left">
            Projetos com <span className="text-cyan-600 dark:text-primary">código aberto</span>
          </h2>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-primary hover:underline">
            Ver todos no GitHub <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projetos.projetos.map((projeto) => (
            <div key={projeto.slug} className="group relative bg-white dark:bg-surface-container-low rounded-3xl border-2 border-primary/20 dark:border-primary/30 overflow-hidden transition-all duration-300 shadow-lg dark:shadow-primary/5 hover:border-primary/40 dark:hover:border-primary/50 flex flex-col h-full transform hover:-translate-y-2">
              <div className="w-full bg-[#0f1115] overflow-hidden">
                <img src={bannerUrl(projeto)} alt={projeto.titulo} loading="lazy" className="w-full group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
                <h3 className="text-2xl font-headline font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-cyan-600 dark:group-hover:text-primary transition-colors">{projeto.titulo}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed flex-1 mb-6">{projeto.descricao}</p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {projeto.metricas.slice(0, 3).map(m => (
                    <div key={m.label}>
                      <div className="text-xl font-headline font-bold text-cyan-600 dark:text-primary">{m.valor}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold leading-snug mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-slate-50 dark:bg-surface-container-highest text-[10px] sm:text-xs font-mono text-slate-800 dark:text-primary font-bold uppercase tracking-widest rounded-md border border-slate-200 dark:border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projeto/${projeto.slug}`} className="inline-flex w-full items-center justify-center px-6 py-4 bg-primary text-slate-900 font-bold font-mono tracking-widest uppercase rounded-xl hover:bg-primary-container dark:hover:bg-primary-dim gap-2 transition-all shadow-lg hover:shadow-primary/30 group-hover:scale-[1.02]">
                    Ver projeto <span className="text-xl">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
